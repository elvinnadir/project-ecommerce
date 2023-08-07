import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { ReactSortable } from 'react-sortablejs'

export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
    images: existingImages,
    category: assignedCategory,
    properties: assignedProperties
}) {

    const [title, setTitle] = useState(existingTitle || "");
    const [category, setCategory] = useState(assignedCategory || "");
    const [description, setDescription] = useState(existingDescription || "");
    const [price, setPrice] = useState(existingPrice || "");
    const [goProducts, setGoProducts] = useState(false);
    const [images, setImages] = useState(existingImages || []);
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState([])
    const [productProperties, setProductProperties] = useState(assignedProperties || {})

    const router = useRouter()

    useEffect(() => {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        })
    }, [])

    async function saveProduct(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            price,
            images,
            category,
            properties: productProperties
        }

        if (_id) {
            // update 
            await axios.put('/api/products', { ...data, _id })
        } else {
            // create
            await axios.post('/api/products', data)
        }
        setGoProducts(true)

    }

    if (goProducts) {
        router.push('/products')
    }

    async function uploadImage(e) {
        setIsUploading(true)
        const files = e.target?.files;

        if (files?.length > 0) {
            const data = new FormData();

            for (const file of files) {
                data.append('file', file)
            }

            const res = await axios.post('/api/upload', data)
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            })
            setIsUploading(false)
        }
    }

    function updateImagesOrder(images) {
        setImages(images);
    }

    function setProductProp(propName, value) {
        setProductProperties(prev => {
            const newProductProps = { ...prev };
            newProductProps[propName] = value;
            return newProductProps;
        });
    }

    const propertiesFill = [];
    if (categories.length > 0 && category) {
        let catInfo = categories.find(({ _id }) => _id === category);
        propertiesFill.push(...catInfo.properties);
        if (catInfo?.parent?._id) {
            const parentCat = categories.find(({ _id }) => _id === catInfo?.parent?._id);
            propertiesFill.push(...parentCat.properties);
            catInfo = parentCat;
        }
    }


    return (
        <form onSubmit={saveProduct}>
            <label>Product name</label>
            <input
                type="text"
                placeholder='product name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Category</label>
            <select value={category}
                onChange={e => setCategory(e.target.value)}
            >
                <option value="">Uncategorized</option>
                {categories.length > 0 && categories.map(c => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                ))}
            </select>

            {propertiesFill.length > 0 && propertiesFill.map((p) => (
                <div key={p.name} className="">
                    <label>{p.name[0].toUpperCase() + p.name.substring(1)}</label>
                    <div>
                        <select value={productProperties[p.name]}
                            onChange={e =>
                                setProductProp(p.name, e.target.value)
                            }>
                            {p.values.map(val => (
                                <option key={val} value={val}>{val}</option>
                            ))}
                        </select>
                    </div>
                </div>
            ))}

            <label>Photos</label>
            <div className='mb-2 flex flex-wrap gap-1'>
                <ReactSortable
                    list={images}
                    setList={updateImagesOrder}
                    className='flex flex-wrap gap-1'
                >
                    {!!images?.length && images.map(link => (
                        <div key={link} className='h-24 border border-gray-200 bg-white p-4 shadow-sm rounded-sm'>
                            <img src={link} alt="image" className='rounded-lg' />
                        </div>
                    ))}
                </ReactSortable>

                {isUploading && (
                    <div className="h-24 flex items-center">
                        <Spinner />
                    </div>
                )}
                <label className="cursor-pointer w-24 h-24 border flex text-sm text-gray-500 bg-gray-200 items-center justify-center rounded-lg gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <div>Upload</div>
                    <input
                        type="file"
                        className='hidden'
                        onChange={uploadImage}
                        multiple
                    />
                </label>

            </div>
            <label>Description</label>
            <textarea
                placeholder='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label>Price (in USD)</label>
            <input
                type="number"
                placeholder='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit" className="btn-primary">Save</button>
        </form>
    )
}

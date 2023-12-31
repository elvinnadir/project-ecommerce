import Layout from '@/components/Layout'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { withSwal } from 'react-sweetalert2';


function Categories({ swal }) {
    const [name, setName] = useState("");
    const [categories, setCategories] = useState([]);
    const [parentCategory, setParentCategory] = useState("");
    const [editedCategory, setEditedCategory] = useState(null);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, [])

    function fetchCategories() {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        })
    }

    async function saveCategory(e) {
        e.preventDefault();

        const data = {
            name,
            parentCategory,
            properties: properties.map(p => ({
                name: p.name,
                values: p.values.split(','),
            })),
        }

        if (editedCategory) {
            data._id = editedCategory._id
            await axios.put('/api/categories', data)
            setEditedCategory(null)
        } else {
            await axios.post('/api/categories', data)
        }

        setName('')
        setParentCategory("")
        setProperties([])
        fetchCategories()
    }

    function editCategory(category) {
        setEditedCategory(category);
        setName(category.name);
        setParentCategory(category.parent?._id);
        setProperties(category.properties.map(({ name, values }) => ({
            name,
            values: values.join(',')
        })))
    }

    function deleteCategory(category) {
        swal.fire({
            title: 'Are you sure?',
            text: `Do you want to delete ${category.name}`,
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Yes,Delete!',
            confirmButtonColor: '#d55',
            reverseButtons: true,

        }).then(async result => {
            if (result.isConfirmed) {
                const { _id } = category;
                await axios.delete('/api/categories?_id=' + _id);
                fetchCategories();
            }
        })
    }

    function addProperty() {
        setProperties(prev => {
            return [...prev, { name: '', values: '' }]
        })
    }

    function handlePropertyName(index, property, newName) {
        setProperties(prev => {
            const properties = [...prev];
            properties[index].name = newName;
            return properties;
        })
    }

    function handlePropertyValues(index, property, newValues) {
        setProperties(prev => {
            const properties = [...prev];
            properties[index].values = newValues;
            return properties;
        });
    }


    function removeProperty(indexRemove) {
        setProperties(prev => {
            return [...prev].filter((p, pIndex) => {
                return pIndex !== indexRemove;
            });
        });
    }

    return (
        <Layout>
            <h1>Categories</h1>
            <label>{editedCategory
                ? `Edit category ${editedCategory.name}`
                : 'Create category'}
            </label>
            <form onSubmit={saveCategory}>
                <div className="flex gap-1">
                    <input
                        type="text"
                        placeholder={'Category name'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <select
                        onChange={e => setParentCategory(e.target.value)}
                        value={parentCategory}
                    >
                        <option value="">No parent category</option>
                        {categories.length > 0 && categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className='mb-2'>
                    <label className='block'>Properties</label>
                    <button
                        onClick={addProperty}
                        type='button'
                        className="btn-default text-sm mb-2"
                    >
                        Add new property
                    </button>
                    {properties.length > 0 && properties.map((property, index) => (
                        <div className='flex gap-1 mb-2'>
                            <input
                                type="text"
                                className='mb-0'
                                placeholder='property name(example:color)'
                                value={property.name}
                                onChange={e => handlePropertyName(
                                    index,
                                    property,
                                    e.target.value
                                )}
                            />
                            <input
                                type="text"
                                className='mb-0'
                                placeholder="values, comma separated"
                                value={property.values}
                                onChange={e => handlePropertyValues(
                                    index,
                                    property,
                                    e.target.value
                                )}
                            />
                            <button
                                type='button'
                                className="btn-red"
                                onClick={() => removeProperty(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex gap-1">
                    {editedCategory && (
                        <button
                            type="button"
                            onClick={() => {
                                setEditedCategory(null);
                                setName('');
                                setParentCategory('');
                                setProperties([]);
                            }}
                            className="btn-default">Cancel</button>
                    )}
                    <button
                        type="submit"
                        className="btn-primary py-1">
                        Save
                    </button>
                </div>
            </form>

            {!editedCategory && (
                <table className='basic mt-4'>
                    <thead>
                        <tr>
                            <td>Category name</td>
                            <td>Parent category</td>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.length > 0 && categories.map(category => (
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td>{category?.parent?.name}</td>
                                <td>
                                    <button
                                        className="btn-primary mr-1"
                                        onClick={() => editCategory(category)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn-red"
                                        onClick={() => deleteCategory(category)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </Layout>
    )
}

export default withSwal(({ swal }, ref) => (
    <Categories swal={swal} />
))



import {Form, Link, useLoaderData} from 'react-router-dom';
import {FormInput, FormSelect} from '../index.js';
import {sortOptions} from "../../utils/constants.jsx";

const Filters = () => {
    const {meta, params} = useLoaderData();
    const {categories, brands} = meta
    const {search, category, brand, sort} = params


    const defaultSortValue = sort ? Array.from(sortOptions.entries()).find(([k, v]) => v === sort)[0]
        : sortOptions.get(sortOptions.keys().next())


    return (
        <Form
            className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* SEARCH */}
            <FormInput
                type='search'
                label='Rechercher un produit'
                name='search'
                size='input-sm'
                defaultValue={search}
            />
            {/* CATEGORIES */}
            <FormSelect
                label='Catégorie'
                name='category'
                list={['tout', ...categories]}
                size='select-sm'
                defaultValue={category}

            />
            {/* COMPANIES */}
            <FormSelect
                label='Marque'
                name='brand'
                list={['tout', ...brands,]}
                size='select-sm'
                defaultValue={brand}

            />
            {/* ORDER */}
            <FormSelect
                label='Trier par'
                name='sort'
                list={Array.from(sortOptions.keys())}
                size='select-sm'
                defaultValue={defaultSortValue}
            />

            {/* BUTTONS */}
            <button type='submit' className='btn btn-primary btn-sm'>
                Rechercher
            </button>
            <Link to='/products' className='btn btn-accent btn-sm'>
                Annuler
            </Link>
        </Form>
    );
};
export default Filters;
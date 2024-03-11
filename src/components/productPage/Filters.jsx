import {Form, Link, useLoaderData} from 'react-router-dom';
import {FormInput, FormSelect} from '../index.js';

const Filters = () => {
    const {meta} = useLoaderData();
    const {categories, brands} = meta
    return (
        <Form
            className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* SEARCH */}
            <FormInput
                type='search'
                label='Rechercher un produit'
                name='search'
                size='input-sm'
                defaultValue=""
            />
            {/* CATEGORIES */}
            <FormSelect
                label='Catégorie'
                name='category'
                list={['tout', ...categories]}
                size='select-sm'

            />
            {/* COMPANIES */}
            <FormSelect
                label='Marque'
                name='brand'
                list={['tout', ...brands,]}
                size='select-sm'

            />
            {/* ORDER */}
            <FormSelect
                label='Trier par'
                name='sort'
                list={['a-z', 'z-a', 'Ajouté récemment']}
                size='select-sm'

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
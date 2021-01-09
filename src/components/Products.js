import React from 'react'
import styled from 'styled-components'
import CardRotation from './CardRotation'
import { Button } from './Shared'
import Title from './Title'
import { ProductsList as list } from '../data/Products'

function Products({ setState }) {
    return (
        <>
            <Container>
                <Title title='MOST POPULAR TOURS' />
                <ProductsRow>
                    {list.map(({ title, image, info, price, startColor, endColor }, index) => (
                        <CardRotation setState={setState} key={index} title={title} image={image} info={info} price={price} startColor={startColor} endColor={endColor} />
                    ))}
                </ProductsRow>
                <Button big="true" primary='true'>Discover all tours</Button>
            </Container>
        </>
    )
}

export default Products

const Container = styled.div`
    padding:20rem 0 10rem 0;
    margin-top:-15rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#f7f7f7;
`
const ProductsRow = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:0 1rem;
    align-items:stretch;
    width:100%;
    margin-bottom:6rem;
`

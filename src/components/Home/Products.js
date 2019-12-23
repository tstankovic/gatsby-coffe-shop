import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Product from "./Product"
import Title from "../Globals/Title"

export default function Products() {
  const query = graphql`
    {
      products: allContentfulCoffeeProduct {
        edges {
          node {
            id
            title
            price
            image {
              fluid(maxHeight: 426) {
                src
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node }) => {
                  return <Product key={node.id} product={node} />
                })}
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

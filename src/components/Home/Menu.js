import React, { useState } from "react"
import Img from "gatsby-image"

import Title from "../Globals/Title"

const getCategories = items => {
  let tempItems = items.map(item => item.node.category)
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  return ["all", ...categories]
}

export default function Menu(props) {
  const [items, setItems] = useState(props.items.edges)
  const [coffeeItems, setCoffeeItems] = useState(props.items.edges)
  const [categories, setCategories] = useState(getCategories(props.items.edges))

  const handleItems = category => {
    const tempItems = [...items]
    if (category === "all") {
      setCoffeeItems(tempItems)
    } else {
      setCoffeeItems(tempItems.filter(({ node }) => node.category === category))
    }
  }

  if (items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="menu" />
          {/* categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => handleItems(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          {/* items */}
          <div className="row">
            {coffeeItems.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-sm-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0 font-weight-bold">{node.title}</h6>
                      <h6 className="mb-0 text-yellow font-weight-bold">
                        ${node.price}
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>There are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

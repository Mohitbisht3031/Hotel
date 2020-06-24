import React from "react"

const Card = () => {
  return (
    <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 mr-4 ml-4 center  shadow-3">
      <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
          <div class="dtc">
            <h1 class="f5 f4-ns mv0">Hotel Name</h1>
          </div>
          <div class="dtc tr">
            <br />{" "}
            <h2 class="f5 mv0">
              Starting @ <br />
              <i class="fa fa-inr" aria-hidden="true"></i>2500/-
            </h2>
          </div>
        </div>
        <p class="f6 lh-copy measure mt2 mid-gray">Available Dates</p>
        <div className="f4 bg-blue br2 grow">
          BOOK NOW {"              "}
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </div>
      </div>
    </article>
  )
}

export default Card

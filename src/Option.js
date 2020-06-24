import React from "react"

const Options = () => {
  return (
    <div className="d-flex mt3 ml4">
      <div>
        <select className="mr4 ">
          <option value="State">State</option>
          <option value="Delhi">Delhi</option>
          <option value="None">None</option>
        </select>
        <select>
          <option value="Available Date">Available date</option>

          <option value="None">None</option>
        </select>
      </div>
      <div className="search">
        <form class="form-inline mr-auto">
          <input class="form-control mr-sm-1" type="text" placeholder="Search" aria-label="Search" />
          <button class="btn grow bg-blue white  btn-rounded btn-sm my-0" type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Options

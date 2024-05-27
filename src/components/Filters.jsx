import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormSelect from "./FormSelect";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "all",
    "laptos",
    "accesories",
    "desktops"
  ]);


  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="buscar producto"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      <FormSelect
        label="selecciona una categoría"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      <button
        type="submit"
        className="btn-primary-full"
      >
        buscar
      </button>
      <Link to="/shop?page=1" className="btn-primary-full">
        reiniciar
      </Link>
    </Form>
  );
};

export default Filters;

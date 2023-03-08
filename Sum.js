import React from "react";

export function Sum(props) {
  const {a,b}= props
  const totale = a + b;
  return <h1>{totale}</h1>

}
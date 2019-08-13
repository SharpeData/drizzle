import React from "react";
import { ContractData, ContractForm } from "@drizzle/react-components";

export const SimpleStorageComponent = () => (
  <>
    <h2>SimpleStorage</h2>
    <p>
      This shows a simple ContractData component with no arguments, along with a
      form to set its value.
    </p>
    <p>
      <strong>Stored Value: </strong>
      <ContractData contract="SimpleStorage" method="storedData" />
    </p>
    <ContractForm contract="SimpleStorage" method="set" />
    <p>
      <strong>Stored Boolean Value: </strong>
      <ContractData contract="SimpleStorage" method="storedBool" />
    </p>
    <ContractForm contract="SimpleStorage" method="setBool" />
  </>
);

const CustomRender = ({
  inputs,
  inputTypes,
  state,
  handleInputChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    {inputs.map((input, index) => (
      <input
        style={{ fontSize: 30 }}
        key={input.name}
        type={inputTypes[index]}
        name={input.name}
        value={state[input.name]}
        placeholder={input.name}
        onChange={handleInputChange}
      />
    ))}
    <button
      key="submit"
      type="button"
      onClick={handleSubmit}
      style={{ fontSize: 30 }}
    >
      Submit Big
    </button>
  </form>
);

export const SimpleStorageCustomRenderComponent = () => (
  <>
    <h2>SimpleStorage with Custom Rendering</h2>
    <p>
      This is the same contract as above, but here we customize the
      ContractForm's rendered component's style.
    </p>
    <ContractForm contract="SimpleStorage" method="set" render={CustomRender} />
  </>
);

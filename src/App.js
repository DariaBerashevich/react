import React from "react";
import JSONDATA from "./MOCK_DATA.json";
import "./App.css";

 const SearchInputModes = {
    Immediate: "Immediate",
    PressEnter: "PressEnter",
    AfterStop: "AfterStop",
  };

export default function App() {
  return (
    <div className="main">
      <SearchForm mode={SearchInputModes.AfterStop} />
    </div>
  );
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
    this.handler = () => {};
    this.timeout = 1000;
   
  }
  onSearchHandler = (e) => {
    this.setState({ inputText: e.target.value });
  }
  onEnterHandler = (e) => {
    if (e.key === "Enter") {
      this.setState({ inputText: e.target.value });
    }
  }
  onStopHandler = (e) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ inputText: e.target.value });
    }, 2000);
  }

  render() {
    if (this.props.mode === SearchInputModes.Immediate) {
      this.handler = this.onSearchHandler;
    } else if (this.props.mode === SearchInputModes.PressEnter) {
      this.handler = this.onEnterHandler;
    } else if (this.props.mode === SearchInputModes.AfterStop) {
      this.handler = this.onStopHandler;
    }
    return (
      <div>
        <InputSearch
          placeholder="Search"
          onSearch={this.handler}
          mode={this.props.mode}
        />
        <List result={this.state.inputText} />
      </div>
    );
  }
}

class InputSearch extends React.Component {
  render() {
    const { mode, placeholder, onSearch } = this.props;
    return (
      <div>
        {(mode === SearchInputModes.Immediate || mode === SearchInputModes.AfterStop) && (
          <input type="text" placeholder={placeholder} onChange={onSearch} />
        )}
        {mode === SearchInputModes.PressEnter && (
          <input type="text" placeholder={placeholder} onKeyPress={onSearch} />
        )}
      </div>
    );
  }
}
class List extends React.Component {
  render() {
    const inputText = this.props.result;
    return (
      <ul>
        {JSONDATA.filter((val) => {
          if (inputText === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().startsWith(inputText.toLowerCase()) ||
            val.last_name.toLowerCase().startsWith(inputText.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            <li key={key}>
              {val.first_name} {val.last_name}
            </li>
          );
        })}
      </ul>
    );
  }
}

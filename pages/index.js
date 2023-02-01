import React from "react";
export default function Home() {
  const [input, setInput] = React.useState("");
  const [ans1, setAns1] = React.useState("");
  const [ans2, setAns2] = React.useState("");
  const [ans3, setAns3] = React.useState("");
  const [ans4, setAns4] = React.useState([]);
  const [ans5, setAns5] = React.useState([]);
  const [ans6b, setAns6b] = React.useState("");
  const [ans6a, setAns6a] = React.useState("");
  const [ans7a, setAns7a] = React.useState("");
  const [ans7b, setAns7b] = React.useState("");
  const number1 = () => {
    if (input.length > 0) {
      const data = input.split(",");

      setAns1(data.length);
    }
  };
  const number2 = (arr) => {
    const numbers = arr.split(",");
    if (numbers.length > 0) {
      let result = numbers[0];
      for (let i = 0; i < numbers.length; i++) {
        if (Number(numbers[i]) < Number(result)) {
          result = numbers[i];
        }
      }
      setAns2(result);
    }
  };
  const number3 = (arr) => {
    const numbers = arr.split(",");
    if (numbers.length > 0) {
      let result = numbers[0];
      for (let i = 0; i < numbers.length; i++) {
        if (Number(numbers[i]) > Number(result)) {
          result = numbers[i];
        }
      }
      setAns3(result);
    }
  };

  function number4(numbers) {
    const arr = numbers.split(",");
    let counts = {};
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i]]) {
        counts[arr[i]] += 1;
      } else {
        counts[arr[i]] = 1;
      }
    }
    for (let prop in counts) {
      if (Number(counts[prop]) >= 2) {
        result.push({
          data: `${prop} : ${counts[prop]}`,
        });
      }
    }
    console.log(result);
    setAns4(result);
  }
  const number5 = (numbers) => {
    const array = numbers.split(",");
    let counts = {};
    const search = [];
    const index = [];
    let indexNumberSame = {};
    const arr = array;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (Number(arr[j]) > Number(arr[j + 1])) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
        if (Number(arr[j]) === Number(arr[j + 1])) {
          search.push(Number(arr[j]));
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < search.length; j++) {
        if (Number(arr[i]) === Number(search[j])) {
          indexNumberSame[`urutan ${i + 1}`] = arr[i];
        }
      }
    }
    console.log("jawaban soal no 5 :", indexNumberSame);
    console.log("jawaban soal no 5 :", arr);
    setAns5(array);
  };
  const number6a = (array) => {
    const number = array.split(",");
    let result = 0;

    for (let i = 0; i < number.length; i++) {
      if (Number(number[i]) % 2 != 0) {
        result++;
      }
    }
    setAns6a(result);
  };
  const number6b = (array) => {
    const number = array.split(",");
    let result = 0;
    for (let i = 0; i < number.length; i++) {
      if (Number(number[i]) % 2 == 0) {
        result++;
      }
    }

    setAns6b(result);
  };
  const number7a = (array) => {
    const odd = [];
    const number = array.split(",");

    for (let i = 0; i < number.length; i++) {
      if (Number(number[i]) % 2 != 0) {
        odd.push(number[i]);
      }
    }
    setAns7a(odd);
  };
  const number7b = (array) => {
    const even = [];
    const number = array.split(",");

    for (let i = 0; i < number.length; i++) {
      if (Number(number[i]) % 2 == 0) {
        even.push(number[i]);
      }
    }

    setAns7b(even);
  };

  return (
    <div>
      <span>
        Plase input with like this
        :83,1,78,26,67,54,49,7,36,99,26,19,15,7,21,39,7,2,8
      </span>{" "}
      <br />
      <label for="html">HTML</label>input number : <br />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => number1()}>Click for number 1</button>
          <span>{ans1}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => number2(input)}>Click for number 2</button>
          <span>{ans2}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => number3(input)}>Click for number 3</button>
          <span>{ans3}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => number4(input)}>Click for number 4</button>
          {ans4.map((item) => (
            <span>{item.data}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button onClick={() => number5(input)}>Click for number 5</button>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {" "}
            {ans5.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={() => {
              number6a(input);
              number6b(input);
            }}
          >
            Click for number 6
          </button>
          <span> odd :{ans6a}</span>
          <span>even :{ans6b}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={() => {
              number7a(input);
              number7b(input);
            }}
          >
            Click for number 7
          </button>
          odd :
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {ans7a.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          even :
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {ans7b.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

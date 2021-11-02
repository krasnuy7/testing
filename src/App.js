import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [jobs, setJobs] = useState("");
  const [time, setTime] = useState(0);
  const [fetchResult, setFetchResult] = useState([]);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    [...document.querySelectorAll("#root > p")].forEach((i) =>
      i.classList.add("p1")
    );
    async function fetchResult() {
      const res = await (
        await fetch("https://optimizelens.com.ua/api/clientsInfo.php")
      ).json();
      setFetchResult(res);
    }
    let date = new Date();

    // час в вашем текущем часовом поясе

    setSecond(date.getSeconds());
    fetchResult();
  }, []);
  const valueSelenct = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    if (e.target.name === "namePerson") {
      setName(e.target.value);
    } else {
      setJobs(e.target.value);
    }
  };
  const takeTime = (e) => {
    var dateNow = Date.now();
    let seconds = Number(e.target.value) * 1000 * 1000;
    let minute = seconds * 60;
    console.log(minute);
    let finishTime = dateNow + minute;
    console.log(finishTime);
    setTime(finishTime);
  };

  return (
    <>
      <p>add class</p>
      <p>add class</p>
      <p>add class</p>
      <div>
        <select name="namePerson" onChange={valueSelenct}>
          <option>Ваше имя</option>
          <option value="Дима">Дима</option>
          <option value="Денис">Денис</option>
        </select>
        <select name="jobs" onChange={valueSelenct}>
          <option>Кем вы работаете?</option>
          <option value="Программист">Программист</option>
          <option value="Менежер продаж">Менежер продаж</option>
        </select>
        <ul>
          <li>Ваше имя: {name}</li>
          <li>Вы работаете:{jobs} </li>
        </ul>

        <div>
          <select onChange={takeTime}>
            <option>Выберете город</option>
            <option value="9">USA</option>
            <option value="3">SPAIN</option>
            <option value="0">Kiev</option>
          </select>
          <div>{new Date(time).toString()}</div>
        </div>
        <ul>
          {fetchResult.map((i, idx) => {
            return (
              <li key={idx}>
                Имя {i.name} Валюта: {i.typePrice}
              </li>
            );
          })}
        </ul>
        <div>Секунды сейчас: {second}</div>
      </div>
    </>
  );
}

export default App;

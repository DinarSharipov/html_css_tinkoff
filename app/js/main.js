class Table {
  constructor(container, rows, cols) {
    this.container = container;
    this.rows = rows;
    this.cols = cols;
    this.createTable();
    this.rootCols = {
      first: "Тинькофф банк отзывы",
      second: "Тинькофф банк",
    };
  }

  listener() {
    let allChecked = document.getElementById("allCheck");
    let allInputs = document.querySelectorAll("input");
    allChecked.onchange = (e) => {
      allInputs.forEach((element) => {
        e.target.checked == true
          ? (element.checked = true)
          : (element.checked = false);
      });
    };

    let openBonus = document.querySelectorAll("#openBonusList");
    openBonus.forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e.target);
        this.createBonusList(e);
      });
    });
    let deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
      allInputs.forEach((item, index) => {
        item.checked == true &&
        item.className == "checkbox icon" &&
        item.id != "allCheck"
          ? item.parentElement.parentElement.remove()
          : null;
      });
      allChecked.checked = false;
    });
  }

  createBonusList(e) {
    let row = e.target.parentElement.parentElement;
    let toggleBtn = e.target;
    if (toggleBtn.checked == true) {
      e.target.style.transform = "rotate(0deg)";
      toggleBtn.checked = false;
      return document.getElementById(`${"bonus-" + row.id}`).remove();
    }
    toggleBtn.checked = true;
    e.target.style.transform = "rotate(90deg)";

    row.insertAdjacentHTML(
      "afterend",
      `<tr class="table__body-row opened-row" id="${"bonus-" + row.id}"></tr>`
    );
    let newRow = document.getElementById(`${"bonus-" + row.id}`);
    for (let col = 1; col < this.cols; col++) {
      console.log(true);
      if (col == 1) {
        newRow.insertAdjacentHTML(
          "beforeend",
          `<td class="table__body-col first-col opened-col__first">
        <button>Посмотреть ТОП-10</button>
      </td>`
        );
      } else if (col == 2) {
        newRow.insertAdjacentHTML(
          "beforeend",
          `<td class="table__body-col second-col opened-col__second"></td>`
        );
      } else {
        newRow.insertAdjacentHTML(
          "beforeend",
          `<td class="table__body-col opened-col">
        <img src="./images/png/1.png" alt="" />
        <img src="./images/png/2.png" alt="" />
        <img src="./images/png/2.png" alt="" />
        <img src="./images/png/2.png" alt="" />
        <img src="./images/png/2.png" alt="" />
      </td>`
        );
      }
    }
  }

  createTable() {
    let container = document.getElementById(this.container);
    container.insertAdjacentHTML(
      "beforeend",
      '<table class="table" id="table"></table>'
    );
    let table = document.getElementById("table");

    this.createRootRow(table);

    table.insertAdjacentHTML(
      "beforeend",
      `<tbody class="table__body" id="tableBody"></tbody>`
    );
    let tableBody = document.getElementById("tableBody");

    for (let id = 1; id < this.rows; id++) {
      this.createRow(tableBody, id);
    }

    this.listener();
  }

  createRootRow(table) {
    table.insertAdjacentHTML(
      "beforeend",
      `<thead class="table__head">
    <tr class="table__head-row" id="rootRow"></tr></thead>`
    );
    let rootRow = document.getElementById("rootRow");
    let startDate = new Date(2021, 0, 1);
    let day = startDate.getDate();
    let month = startDate.getMonth();
    for (let col = 1; col < this.cols; col++) {
      if (col == 1) {
        rootRow.insertAdjacentHTML(
          "beforeend",
          `<th class="table__head-col first-col">
          <input class="checkbox icon" type="checkbox" id="allCheck"/>
          <i class="far fa-trash-alt icon" id="deleteBtn"></i>
          <i class="fas fa-redo-alt icon"></i>
          <i class="fas fa-rocket icon"></i>
        </th>`
        );
      } else if (col == 2) {
        rootRow.insertAdjacentHTML(
          "beforeend",
          `<th class="table__head-col second-col">Оценка частотности</th>`
        );
      } else {
        rootRow.insertAdjacentHTML(
          "beforeend",
          `<th class="table__head-col">${
            col > 9 ? day++ + ".0" + month : "0" + day++ + ".0" + (month + 1)
          }</th>`
        );
      }
    }
  }

  createRow(tableBody, id) {
    tableBody.insertAdjacentHTML(
      "beforeend",
      `<tr class="table__body-row" id=${"row-" + id}></tr>`
    );
    let row = document.getElementById(`row-${id}`);
    this.createCol(row, id);
  }

  createCol(row, id) {
    for (let col = 1; col < this.cols; col++) {
      if (col == 1 && Boolean(id % 2)) {
        row.insertAdjacentHTML(
          "beforeend",
          `<td class="table__body-col first-col">
        <input class="checkbox icon" type="checkbox" />
        <span class="firs-col-text">Тинькофф банк отзывы</span>
        <i style="color: gold" class="far fa-star"></i>
        <i class="fas fa-chevron-right" id="openBonusList"></i>
      </td>`
        );
      } else if (col == 1 && Boolean(id % 2) == false) {
        row.insertAdjacentHTML(
          "beforeend",
          `<td class="table__body-col first-col">
        <input class="checkbox icon" type="checkbox" />
        <span class="firs-col-text">Тинькофф банк</span>
        <i class="fas fa-chevron-right" id="openBonusList"></i>
      </td>`
        );
      } else if (col == 2) {
        row.insertAdjacentHTML(
          "beforeend",
          ` <td class="table__body-col second-col">${Math.round(
            Math.random() * 10000
          )}</td>`
        );
      } else {
        row.insertAdjacentHTML(
          "beforeend",
          ` <td class="table__body-col  ${
            Math.round(Math.random() * 100) > 95 ? "index" : null
          }">${Math.round(Math.random() * 1000)}</td>`
        );
      }
    }
  }
}

let table = new Table("tableWrapper", 10, 33);

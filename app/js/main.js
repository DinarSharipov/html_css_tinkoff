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
          <i class="far fa-trash-alt icon"></i>
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
          ` <td class="table__body-col second-col">Второй столбик</td>`
        );
      } else {
        row.insertAdjacentHTML(
          "beforeend",
          ` <td class="table__body-col">${Math.round(
            Math.random() * 1000
          )}</td>`
        );
      }
    }
  }
}

let table = new Table("tableWrapper", 10, 33);

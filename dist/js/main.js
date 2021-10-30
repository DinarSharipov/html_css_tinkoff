const container = "table";
const row = document.querySelectorAll(".table__row");
const box = document.querySelectorAll(".table__row--box");

class Row {
  constructor(container = "table", length) {
    this.container = container;

    this.length = length;
    this.createRow();
  }

  createRow() {
    let cont = document.getElementById("table");
    console.log(cont);
    for (let id = 2; id < this.length; id++) {
      cont.insertAdjacentHTML("beforeend", this.renderRow(id));
      let rowBox = new RowBox();
      rowBox.createRowBox(id);
    }
  }

  renderRow(i) {
    return `<tr id="${i}" class="table__row row-open">
    </tr>`;
  }
}

class RowBox {
  constructor() {
    this.state = [
      { rowName: "Тинькофф банк отзывы" },
      { rowName: "Тинькофф банк" },
    ];
    this.length = 33;
  }

  createRowBox(id) {
    let row = document.getElementById(id);
    for (let i = 1; i < this.length; i++) {
      row.insertAdjacentHTML("beforeend", this.renderBox(i, id));
    }
  }

  renderBox(i, id) {
    console.log(Boolean(id % 2));
    if (i == 1 && !Boolean(id % 2)) {
      return `<td class="table__row--box" id=${i}>
    <input class="checkbox" type="checkbox" />
    <span>${this.state[0].rowName}</span>
    <i style="color: gold" class="fas fa-star"></i>
    <i class="fas fa-chevron-right btn-open"></i>
  </td>`;
    } else if (i == 1 && Boolean(id % 2)) {
      return `<td class="table__row--box" >
      <input class="checkbox" type="checkbox" />
      <span>${this.state[0].rowName}</span>
      <i class="fas fa-chevron-right btn-open"></i>
    </td>`;
    } else {
      return `<td class="table__row--box">
      <span>${Math.round(Math.random() * 1000)}</span>
    </td>`;
    }
  }
}

let newTable = new Row(container, 8);

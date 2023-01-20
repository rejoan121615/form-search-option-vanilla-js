const countryListContainer = document.querySelector(".country-list");
const searchBox = document.querySelector("#search-box");
const showSelectedToggle = document.querySelector("#show-selected");

// states
const countryList = [
    {
        name: "afghanistan",
        active: false,
    },
    {
        name: "algeria",
        active: false,
    },
    {
        name: "angola",
        active: false,
    },
    {
        name: "andorra",
        active: false,
    },
    {
        name: "albania",
        active: true,
    },
    {
        name: "argentina",
        active: false,
    },
];

let activeListList = countryList;
let showSelected = false;

// selected toggler
showSelectedToggle.addEventListener("change", (e) => {
    showSelected = e.target.checked;
    if (showSelected) {
        const selectedFilter = activeListList.filter((item) => {
            return item.active;
        });
        RemoveAllCountry();
        CountryListGenerator(selectedFilter);
    } else {
        RemoveAllCountry();
        CountryListGenerator(activeListList);
    }
});

// search box
searchBox.addEventListener("keyup", (e) => {
    // filter country list
    const filterList = countryList.filter((item) => {
        // console.log(item.name)
        return !item.name.toLowerCase().indexOf(e.target.value);
    });
    activeListList = filterList;
    // generate country list
    RemoveAllCountry();
    CountryListGenerator(activeListList);
});

showSelectedToggle.addEventListener("change", (e) => {
    if (e.target.checked) {
    } else {
    }
});

function RemoveAllCountry() {
    const row = countryListContainer.querySelectorAll(".country-row");
    row.forEach((item) => {
        item.remove();
    });
}

function CountryListGenerator(list) {
    list?.map((item) => {
        const countryRow = document.createElement("div");
        countryRow.classList.add("country-row");
        // append html tag

        countryRow.innerHTML = `<div class="country-row">
            <label class="country-box">
            <p>${item.name}</p>
            <input
            type="checkbox"
            ${item.active ? 'checked="checked"' : ""}
            name="${item.name.toLowerCase()}"
            />
            <span class="checkmark"></span>
            </label>
            </div>`;
        // append on country list container
        countryListContainer.appendChild(countryRow);
    });
}

CountryListGenerator(activeListList);

/* ============================================================
   Indian Railways Travel Portal – JavaScript
   ============================================================ */

// ── Mock Data ────────────────────────────────────────────────

const TRAINS = [
  {
    number: "12951",
    name: "Mumbai Rajdhani Express",
    from: "New Delhi (NDLS)",
    to: "Mumbai Central (BCT)",
    departure: "16:55",
    arrival: "08:15+1",
    duration: "15h 20m",
    classes: ["1A", "2A", "3A"],
    fare: { "1A": 4785, "2A": 2770, "3A": 1935, all: 1935 },
    days: ["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  {
    number: "12301",
    name: "Howrah Rajdhani Express",
    from: "New Delhi (NDLS)",
    to: "Kolkata Howrah (HWH)",
    departure: "16:55",
    arrival: "10:00+1",
    duration: "17h 05m",
    classes: ["1A", "2A", "3A"],
    fare: { "1A": 4985, "2A": 2890, "3A": 2010, all: 2010 },
    days: ["Daily"],
  },
  {
    number: "22691",
    name: "Rajdhani Express (SBC)",
    from: "New Delhi (NDLS)",
    to: "Bangalore City (SBC)",
    departure: "20:30",
    arrival: "05:30+2",
    duration: "33h 00m",
    classes: ["1A", "2A", "3A"],
    fare: { "1A": 5285, "2A": 3070, "3A": 2135, all: 2135 },
    days: ["Tue", "Thu", "Sat"],
  },
  {
    number: "12002",
    name: "Bhopal Shatabdi Express",
    from: "New Delhi (NDLS)",
    to: "Bhopal (BPL)",
    departure: "06:00",
    arrival: "13:55",
    duration: "7h 55m",
    classes: ["CC", "EC"],
    fare: { CC: 685, EC: 1430, all: 685 },
    days: ["Daily except Sun"],
  },
  {
    number: "12627",
    name: "Karnataka Express",
    from: "New Delhi (NDLS)",
    to: "Bangalore City (SBC)",
    departure: "22:30",
    arrival: "05:45+2",
    duration: "31h 15m",
    classes: ["SL", "3A", "2A", "1A"],
    fare: { SL: 665, "3A": 1790, "2A": 2580, "1A": 4495, all: 665 },
    days: ["Daily"],
  },
  {
    number: "12259",
    name: "Duronto Express",
    from: "New Delhi (NDLS)",
    to: "Mumbai Central (BCT)",
    departure: "23:00",
    arrival: "17:00+1",
    duration: "18h 00m",
    classes: ["1A", "2A", "3A", "SL"],
    fare: { "1A": 4585, "2A": 2580, "3A": 1795, SL: 640, all: 640 },
    days: ["Mon", "Fri"],
  },
  {
    number: "11057",
    name: "Amritsar Express",
    from: "Mumbai Central (BCT)",
    to: "New Delhi (NDLS)",
    departure: "23:55",
    arrival: "23:50+1",
    duration: "23h 55m",
    classes: ["SL", "3A", "2A"],
    fare: { SL: 505, "3A": 1370, "2A": 1995, all: 505 },
    days: ["Daily"],
  },
  {
    number: "16031",
    name: "Andaman Express",
    from: "Chennai Central (MAS)",
    to: "New Delhi (NDLS)",
    departure: "11:45",
    arrival: "18:30+2",
    duration: "54h 45m",
    classes: ["SL", "3A", "2A"],
    fare: { SL: 810, "3A": 2185, "2A": 3150, all: 810 },
    days: ["Wed"],
  },
];

const SCHEDULES = {
  "12951": {
    name: "Mumbai Rajdhani Express",
    number: "12951",
    runDays: "Mon Wed Thu Fri Sat Sun",
    stops: [
      { station: "New Delhi (NDLS)", arrival: "–",     departure: "16:55", day: 1, halt: "Source", distance: 0 },
      { station: "Mathura (MTJ)",    arrival: "18:40", departure: "18:42", day: 1, halt: "2 min",  distance: 141 },
      { station: "Kota (KOTA)",      arrival: "22:15", departure: "22:20", day: 1, halt: "5 min",  distance: 456 },
      { station: "Vadodara (BRC)",   arrival: "03:55", departure: "04:00", day: 2, halt: "5 min",  distance: 950 },
      { station: "Surat (ST)",       arrival: "05:38", departure: "05:40", day: 2, halt: "2 min",  distance: 1068 },
      { station: "Mumbai Central (BCT)", arrival: "08:15", departure: "–", day: 2, halt: "Destination", distance: 1384 },
    ],
  },
  "12301": {
    name: "Howrah Rajdhani Express",
    number: "12301",
    runDays: "Daily",
    stops: [
      { station: "New Delhi (NDLS)",    arrival: "–",     departure: "16:55", day: 1, halt: "Source",      distance: 0 },
      { station: "Kanpur (CNB)",        arrival: "21:25", departure: "21:35", day: 1, halt: "10 min",      distance: 440 },
      { station: "Prayagraj (PRYJ)",   arrival: "23:05", departure: "23:15", day: 1, halt: "10 min",      distance: 634 },
      { station: "Gaya (GAYA)",         arrival: "02:07", departure: "02:10", day: 2, halt: "3 min",       distance: 994 },
      { station: "Dhanbad (DHN)",       arrival: "04:00", departure: "04:05", day: 2, halt: "5 min",       distance: 1162 },
      { station: "Kolkata Howrah (HWH)",arrival: "10:00", departure: "–",    day: 2, halt: "Destination", distance: 1447 },
    ],
  },
  "12002": {
    name: "Bhopal Shatabdi Express",
    number: "12002",
    runDays: "Daily except Sun",
    stops: [
      { station: "New Delhi (NDLS)", arrival: "–",     departure: "06:00", day: 1, halt: "Source",      distance: 0 },
      { station: "Agra Cantt (AGC)",  arrival: "08:10", departure: "08:12", day: 1, halt: "2 min",       distance: 188 },
      { station: "Gwalior (GWL)",     arrival: "09:25", departure: "09:27", day: 1, halt: "2 min",       distance: 304 },
      { station: "Jhansi (JHS)",      arrival: "10:35", departure: "10:40", day: 1, halt: "5 min",       distance: 403 },
      { station: "Bhopal (BPL)",      arrival: "13:55", departure: "–",    day: 1, halt: "Destination", distance: 704 },
    ],
  },
};

const POPULAR_ROUTES = [
  { from: "New Delhi",   to: "Mumbai",    trains: 32, duration: "15h–20h", fare: 640,  icon: "🏙️" },
  { from: "New Delhi",   to: "Kolkata",   trains: 28, duration: "17h–24h", fare: 585,  icon: "🌆" },
  { from: "New Delhi",   to: "Bangalore", trains: 18, duration: "31h–40h", fare: 665,  icon: "🌿" },
  { from: "Mumbai",      to: "Goa",       trains: 14, duration: "8h–12h",  fare: 355,  icon: "🏖️" },
  { from: "Chennai",     to: "Bangalore", trains: 22, duration: "5h–7h",   fare: 215,  icon: "🛤️" },
  { from: "Kolkata",     to: "Chennai",   trains: 10, duration: "24h–30h", fare: 810,  icon: "🚂" },
  { from: "Mumbai",      to: "Pune",      trains: 36, duration: "3h–4h",   fare: 125,  icon: "🌄" },
  { from: "New Delhi",   to: "Jaipur",    trains: 24, duration: "5h–6h",   fare: 195,  icon: "🏰" },
];

const PNR_MOCK = {
  "4123456789": {
    trainNumber: "12951",
    trainName: "Mumbai Rajdhani Express",
    boardingStation: "New Delhi (NDLS)",
    destinationStation: "Mumbai Central (BCT)",
    departureDate: "15 Apr 2025",
    arrivalDate: "16 Apr 2025",
    classType: "3A",
    chartStatus: "Chart Prepared",
    passengers: [
      { name: "Passenger 1", age: 34, gender: "Male",   bookedStatus: "CNF/S5/34",  currentStatus: "CNF/S5/34" },
      { name: "Passenger 2", age: 29, gender: "Female", bookedStatus: "CNF/S5/35",  currentStatus: "CNF/S5/35" },
    ],
  },
  "5987654321": {
    trainNumber: "12301",
    trainName: "Howrah Rajdhani Express",
    boardingStation: "New Delhi (NDLS)",
    destinationStation: "Kolkata Howrah (HWH)",
    departureDate: "18 Apr 2025",
    arrivalDate: "19 Apr 2025",
    classType: "2A",
    chartStatus: "Chart Not Prepared",
    passengers: [
      { name: "Passenger 1", age: 45, gender: "Male",   bookedStatus: "WL#12", currentStatus: "RAC 4" },
      { name: "Passenger 2", age: 42, gender: "Female", bookedStatus: "WL#13", currentStatus: "RAC 5" },
    ],
  },
};

// ── Helpers ──────────────────────────────────────────────────

/**
 * Normalise a station string for loose matching.
 * e.g. "New Delhi (NDLS)" → "new delhi"
 */
function normalise(str) {
  return str.toLowerCase().replace(/\(.*?\)/g, "").trim();
}

function formatCurrency(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function randomAvailability() {
  const r = Math.random();
  if (r < 0.5) return { label: "AVAILABLE " + Math.floor(Math.random() * 80 + 10), cls: "avail-available" };
  if (r < 0.75) return { label: "RAC " + Math.floor(Math.random() * 20 + 1), cls: "avail-rac" };
  return { label: "WL#" + Math.floor(Math.random() * 50 + 1), cls: "avail-waitlist" };
}

// ── Train Search ─────────────────────────────────────────────

function searchTrains(from, to, classType) {
  const nFrom = normalise(from);
  const nTo   = normalise(to);

  return TRAINS.filter((t) => {
    const matchFrom = normalise(t.from).includes(nFrom) || nFrom.includes(normalise(t.from).split(" ")[0]);
    const matchTo   = normalise(t.to).includes(nTo)   || nTo.includes(normalise(t.to).split(" ")[0]);
    const matchClass = classType === "all" || t.classes.includes(classType);
    return matchFrom && matchTo && matchClass;
  });
}

function renderTrainCard(train, classType) {
  const fare      = classType === "all" ? train.fare.all : (train.fare[classType] || train.fare.all);
  const avail     = randomAvailability();
  const classHTML = train.classes.map((c) => `<span class="class-badge">${c}</span>`).join("");
  const days      = Array.isArray(train.days) ? train.days.join(", ") : train.days;

  return `
    <div class="train-card">
      <div class="train-main">
        <span class="train-name">${train.name}</span>
        <span class="train-number">#${train.number} &nbsp;|&nbsp; Runs: ${days}</span>
        <div class="train-timing">
          <span class="time">${train.departure}</span>
          <div class="duration">${train.duration}<small>${train.from.split("(")[0].trim()} → ${train.to.split("(")[0].trim()}</small></div>
          <span class="time">${train.arrival}</span>
        </div>
        <div class="train-classes">${classHTML}</div>
      </div>
      <div class="train-action">
        <span class="fare">${formatCurrency(fare)}</span>
        <span class="availability ${avail.cls}">${avail.label}</span>
        <button class="btn-book" onclick="alert('Demo portal – connect to IRCTC API to enable booking.')">Book Now</button>
      </div>
    </div>`;
}

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const from      = document.getElementById("from").value.trim();
  const to        = document.getElementById("to").value.trim();
  const classType = document.getElementById("classType").value;
  const date      = document.getElementById("travelDate").value;
  const container = document.getElementById("searchResults");

  if (!from || !to) {
    container.innerHTML = `<div class="error-msg">Please enter both origin and destination stations.</div>`;
    container.classList.remove("hidden");
    return;
  }
  if (!date) {
    container.innerHTML = `<div class="error-msg">Please select a travel date.</div>`;
    container.classList.remove("hidden");
    return;
  }

  // Show loading
  container.innerHTML = `<div class="loading">Searching trains</div>`;
  container.classList.remove("hidden");

  setTimeout(() => {
    const results = searchTrains(from, to, classType);
    if (results.length === 0) {
      container.innerHTML = `
        <div class="error-msg">
          No trains found between <strong>${from}</strong> and <strong>${to}</strong> for the selected class.
          Try different stations or choose "All Classes".
        </div>`;
      return;
    }
    const dateStr = new Date(date).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    container.innerHTML = `
      <h3>${results.length} train${results.length > 1 ? "s" : ""} found for ${dateStr}</h3>
      ${results.map((t) => renderTrainCard(t, classType)).join("")}`;
  }, 600);
});

// Swap stations
document.getElementById("swapBtn").addEventListener("click", function () {
  const fromInput = document.getElementById("from");
  const toInput   = document.getElementById("to");
  [fromInput.value, toInput.value] = [toInput.value, fromInput.value];
});

// Set min date for travel date input
(function () {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("travelDate").setAttribute("min", today);
  document.getElementById("travelDate").value = today;
})();

// ── PNR Status ───────────────────────────────────────────────

document.getElementById("pnrForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const pnr       = document.getElementById("pnrInput").value.trim();
  const container = document.getElementById("pnrResult");

  if (!/^\d{10}$/.test(pnr)) {
    container.innerHTML = `<div class="error-msg">Please enter a valid 10-digit PNR number.</div>`;
    container.classList.remove("hidden");
    return;
  }

  container.innerHTML = `<div class="loading">Fetching PNR status</div>`;
  container.classList.remove("hidden");

  setTimeout(() => {
    const info = PNR_MOCK[pnr];
    if (!info) {
      container.innerHTML = `<div class="error-msg">PNR <strong>${pnr}</strong> not found. Try <strong>4123456789</strong> or <strong>5987654321</strong> for a demo.</div>`;
      return;
    }

    const overallStatus = info.passengers[0].currentStatus.startsWith("CNF") ? "Confirmed"
                        : info.passengers[0].currentStatus.startsWith("RAC") ? "RAC"
                        : "Waitlisted";
    const statusCls = overallStatus === "Confirmed" ? "status-confirmed"
                    : overallStatus === "RAC"        ? "status-rac"
                    : "status-waitlist";

    const passengerRows = info.passengers
      .map((p, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${p.name}</td>
          <td>${p.age} / ${p.gender.charAt(0)}</td>
          <td>${p.bookedStatus}</td>
          <td><strong>${p.currentStatus}</strong></td>
        </tr>`)
      .join("");

    container.innerHTML = `
      <div class="pnr-result-box">
        <div class="pnr-header">
          <h3>PNR: ${pnr}</h3>
          <span class="pnr-status-badge ${statusCls}">${overallStatus}</span>
        </div>
        <div class="pnr-body">
          <div class="pnr-info-grid">
            <div class="pnr-info-item"><label>Train</label><span>${info.trainNumber} – ${info.trainName}</span></div>
            <div class="pnr-info-item"><label>From</label><span>${info.boardingStation}</span></div>
            <div class="pnr-info-item"><label>To</label><span>${info.destinationStation}</span></div>
            <div class="pnr-info-item"><label>Departure</label><span>${info.departureDate}</span></div>
            <div class="pnr-info-item"><label>Arrival</label><span>${info.arrivalDate}</span></div>
            <div class="pnr-info-item"><label>Class</label><span>${info.classType}</span></div>
            <div class="pnr-info-item"><label>Chart Status</label><span>${info.chartStatus}</span></div>
          </div>
          <table class="passengers-table">
            <thead><tr><th>#</th><th>Passenger</th><th>Age/Gender</th><th>Booked Status</th><th>Current Status</th></tr></thead>
            <tbody>${passengerRows}</tbody>
          </table>
        </div>
      </div>`;
  }, 700);
});

// ── Train Schedule ───────────────────────────────────────────

document.getElementById("scheduleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const query     = document.getElementById("trainNumber").value.trim();
  const container = document.getElementById("scheduleResult");

  if (!query) {
    container.innerHTML = `<div class="error-msg">Please enter a train number or name.</div>`;
    container.classList.remove("hidden");
    return;
  }

  container.innerHTML = `<div class="loading">Loading schedule</div>`;
  container.classList.remove("hidden");

  setTimeout(() => {
    // Find schedule by number or name
    const key = Object.keys(SCHEDULES).find(
      (k) =>
        k === query ||
        query.includes(k) ||
        SCHEDULES[k].name.toLowerCase().includes(query.toLowerCase())
    );

    if (!key) {
      container.innerHTML = `
        <div class="error-msg">
          Schedule not found. Try train numbers <strong>12951</strong>, <strong>12301</strong>, or <strong>12002</strong>.
        </div>`;
      return;
    }

    const schedule = SCHEDULES[key];
    const rows = schedule.stops
      .map((stop, i) => {
        const cls = i === 0 ? "origin" : i === schedule.stops.length - 1 ? "destination" : "";
        return `
          <tr class="${cls}">
            <td>${i + 1}</td>
            <td>${stop.station}</td>
            <td>${stop.arrival}</td>
            <td>${stop.departure}</td>
            <td>Day ${stop.day}</td>
            <td>${stop.halt}</td>
            <td>${stop.distance} km</td>
          </tr>`;
      })
      .join("");

    container.innerHTML = `
      <div class="schedule-header">
        <h3>${schedule.name}</h3>
        <span>#${schedule.number}</span>
        <span>Runs: ${schedule.runDays}</span>
      </div>
      <div style="overflow-x:auto;">
        <table class="schedule-table">
          <thead>
            <tr>
              <th>#</th><th>Station</th><th>Arrival</th><th>Departure</th><th>Day</th><th>Halt</th><th>Distance</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }, 600);
});

// ── Popular Routes ───────────────────────────────────────────

(function renderPopularRoutes() {
  const grid = document.getElementById("routesGrid");
  grid.innerHTML = POPULAR_ROUTES.map(
    (r) => `
    <div class="route-card" onclick="prefillSearch('${r.from}', '${r.to}')">
      <div class="route-title">${r.icon} ${r.from} → ${r.to}</div>
      <div class="route-detail">
        <span>🚆 ${r.trains} trains</span>
        <span>⏱ ${r.duration}</span>
      </div>
      <div class="route-fare">From ${formatCurrency(r.fare)}</div>
    </div>`
  ).join("");
})();

function prefillSearch(from, to) {
  document.getElementById("from").value = from;
  document.getElementById("to").value   = to;
  document.getElementById("search").scrollIntoView({ behavior: "smooth" });
}

// ── Mobile Nav Toggle ─────────────────────────────────────────

document.getElementById("menuToggle").addEventListener("click", function () {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("open");
});

// Close mobile nav when a link is clicked
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobileNav").classList.remove("open");
  });
});

import React, { useState } from "react";
import { TextField, Button, Grid, Autocomplete, Card, CardContent, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { flightsMock } from "./flightsMock";
import "./FlightSearch.css";
//import axios from "axios";


const airports = [
  { code: "DEL", name: "Delhi Airport" },
  { code: "BOM", name: "Mumbai Airport" },
  { code: "BLR", name: "Bangalore Airport" },
  { code: "MAA", name: "Chennai Airport" },
  { code: "HYD", name: "Hyderabad Airport" },
];

const FlightSearch = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
 const [date, setDate] = useState(dayjs("2025-10-15"));

  const [flights, setFlights] = useState([]);

  const isFormValid = origin && destination && date;

  const handleSearch = () => {
    const results = flightsMock.filter(
      (f) =>
        f.from === origin.code &&
        f.to === destination.code &&
        f.departure.startsWith(date.format("YYYY-MM-DD"))
    );

    alert(
      `Origin: ${origin?.code} | Destination: ${ destination?.code}`

  
    );
   
    setFlights(results);
  };

  return (
    <div className="flight-search-container">
      <h2 className="flight-search-title">Flight Search</h2>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={3.5}>
          <Autocomplete
            options={airports}
            getOptionLabel={(option) => `${option.name} (${option.code})`}
            value={origin}
            onChange={(e, newValue) => setOrigin(newValue)}
            renderInput={(params) => <TextField {...params} label="Origin" fullWidth />}
          />
        </Grid>

        <Grid item xs={12} sm={3.5}>
          <Autocomplete
            options={airports}
            getOptionLabel={(option) => `${option.name} (${option.code})`}
            value={destination}
            onChange={(e, newValue) => setDestination(newValue)}
            renderInput={(params) => <TextField {...params} label="Destination" fullWidth />}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Departure Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={!isFormValid}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Display Results */}
      <div style={{ marginTop: "30px" }}>
       
        {flights.map((f) => (
          <Card key={f.flightNumber} style={{ marginBottom: "15px" }}>
            <CardContent>
              <Typography variant="h6">{f.flightNumber}</Typography>
              <Typography>
                {f.from} → {f.to}
              </Typography>
              <Typography>
                Departure: {f.departure} | Arrival: {f.arrival}
              </Typography>
              <Typography>Price: ₹{f.price}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;

import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = (props) => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col md:flex-row">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                    <div>
                        <div class="overflow-x-auto">
                            <table class="table table-zebra w-full">

                                <thead>
                                    <tr>
                                        <th>GMT+06</th>
                                        <th>{format(selected, 'PP')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1 AM - 3 AM</td>
                                        <td>Blue</td>
                                    </tr>
                                    <tr>
                                        <td>4 AM - 6 AM</td>
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <td>7 AM - 9 AM</td>
                                        <td>Red</td>
                                    </tr>
                                    <tr>
                                        <td>10 AM - 12 AM</td>
                                        <td>Red</td>
                                    </tr>
                                    <tr>
                                        <td>1 PM - 3 PM</td>
                                        <td>Blue</td>
                                    </tr>
                                    <tr>
                                        <td>4 PM - 6 PM</td>
                                        <td>Purple</td>
                                    </tr>
                                    <tr>
                                        <td>7 PM - 9 PM</td>
                                        <td>Red</td>
                                    </tr>
                                    <tr>
                                        <td>10 PM - 12 PM</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="calendar">
            <table >
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Dolphins' color ='blue' location='VS Buccaneers'/>
                        <td></td>
                        <Event event='Seahawks' color ='pink' location='VS Bills'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Event event='Buccaneers' color ='green' location='VS Eagles'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='FSU' color ='green' location='VS LSU'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event event='Dolphins' color ='blue' location='VS Vikings'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event='The Vikings' color ='green' location='VS Steelers'/>
                        <td></td>
                        <td></td>
                        <Event event='The Lions' color ='blue' location='VS Bills'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='The Steelers' color ='green' location='VS Lions'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='The Steelers' color ='green' location='VS Dolphins'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='The Dolphins' color ='pink' location='AfterShow Party'/>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event='The Jets' color ='green' location='VS Lions'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );

}

export default Calendar;

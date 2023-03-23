import { React, useState } from 'react';
import { useThemeCSS,useToggleTheme } from './ThemeContext';


function Goal(props) {

    const toggleTheme = useToggleTheme()

    const themeStyle = useThemeCSS();

    const [formData, setFormData] = useState({
        goal: "",
        by: ""
    });

    const changeForm = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function submitForm(e) {
        e.preventDefault();
        props.add(formData);
        setFormData({goal:"", by:""})
    }

    return (
        <>
        <button onClick={toggleTheme}>toggle Theme</button>
        <div style={themeStyle} className="goalForm">
            <form onSubmit={submitForm}>
                <input type="text" name="goal" placeholder="goal..." value={formData.goal} onChange={changeForm} />

                <input type="text" name="by" placeholder="by..." value={formData.by} onChange={changeForm} />

                <button>Add</button>
            </form>
        </div>
        </>
    )

}

export default Goal;
import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default function PageContent(props){
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
        width: "100vw",
        height: "100vh",
        backgroundColor: isDarkMode ? "black" : "white"
    }
    return <div style={styles}>{props.children}</div>
}

// export default class PageContent extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isDarkMode } = this.context;
//         const styles = {
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: isDarkMode ? "black" : "white"
//         }
//         return (
//             <div style={styles}>{this.props.children}</div>
//         )
//     }
// };


import { useState } from "react";
import { Header } from "./components/Header";
import "./global.css"
import styles from "./App.module.css"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post />
                    <Post />
                    <Post />
                </main>
            </div>
        </>
    );
}

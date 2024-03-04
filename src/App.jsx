import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./upload";
import Download from "./download";
import "@radix-ui/themes/styles.css";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Layout from "./layout";
import Index from "./Index";
import NoMatch from "./nomatch";


export default function App() {
    return (
        <Router>
            <MantineProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Index />} />
                        <Route path="upload" element={<Upload />} />
                        <Route path="download" element={<Download />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </MantineProvider>
        </Router>
    );
}

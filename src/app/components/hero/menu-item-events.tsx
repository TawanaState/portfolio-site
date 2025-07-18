"use client"
import { useEffect } from "react"

export default function MenuItemEvents() {
    useEffect(() => {
        const menuItems = document.querySelectorAll(".menu-item > .mobile");
        menuItems.forEach((item) => {
            item.addEventListener("click", () => {
                (document.querySelector("input#menu-toggle") as HTMLInputElement).click();
            })
        })
    })
    return <span></span>
}
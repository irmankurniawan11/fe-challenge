"use client"

import { useEffect, useState } from "react";

const Pagination = ({ maxPage, onPageChange }) => {
    const [page, setPage] = useState(1);

    useEffect(()=>{
        setPage(1)
        onPageChange(1)
    }, [])

    const MAX_PAGE = maxPage;

    function generatePages() {
        const curPage = page;

        let arrayPage = [];
        if(curPage<=2) {
            for (let i = 1; i <= Math.min(5, MAX_PAGE); i++) {
                arrayPage.push(i);
            }
        }
        else if(curPage>(MAX_PAGE-2)) {
            for (let i = MAX_PAGE-4; i <= MAX_PAGE; i++) {
                arrayPage.push(i);
            }
        }
        else {
            for (let i = curPage-2; i <= Math.min(curPage+2, MAX_PAGE); i++) {
                arrayPage.push(i);
            }
        }
        return arrayPage;
    }

    function onPrev() {
        setPage((prev)=>{
            if(prev>1) {
                onPageChange(prev-1)
                return prev-1;
            }
            else {
                return 1
            }
        })
    }
    function onNext() {
        setPage((prev)=>{
            if(prev<MAX_PAGE) {
                onPageChange(prev+1)
                return prev+1
            }
            else {
                return MAX_PAGE
            }
        })
        
    }
    function onPageClick(i) {
        setPage(i);
        onPageChange(i)
    }

    return (
        <div className="flex justify-center my-5 gap-2">
            <button onClick={onPrev} className="py-2 px-4 rounded-lg border bg-slate-100">Prev</button>
            {generatePages().map((i) => (
                <button key={i} onClick={() => onPageClick(i)} className={`${(i == page ? "bg-slate-700 text-white" : "bg-slate-100 border")} py-2 px-4 rounded-lg`}>{i}</button>
            ))}
            <button onClick={onNext} className="py-2 px-4 rounded-lg border bg-slate-100">Next</button>
        </div>
    )
}

export default Pagination
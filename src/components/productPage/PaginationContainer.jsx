import {useLoaderData, useLocation, useNavigate} from "react-router-dom";

const PaginationContainer = () => {
    const {meta} = useLoaderData();
    const {totalPages, number} = meta.paginationDto;
    const pages = Array.from({length: totalPages}, (_, index) => {
        return index + 1;
    });
    const {search, pathname} = useLocation();
    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {

        const searchParams = new URLSearchParams(search);
        searchParams.set("page", pageNumber);
        navigate(`${pathname}?${searchParams.toString()}`);
    };

    if (totalPages < 2) return null;

    return (
        <div className="mt-16 flex justify-end">
            <div className="join">
                <button
                    className="btn btn-xs sm:btn-md join-item"
                    onClick={() => {
                        let prevPage = number - 1;
                        if (prevPage < 1) prevPage = totalPages;
                        handlePageChange(prevPage);
                    }}
                >
                    Prev
                </button>
                {pages.map((pageNumber) => {
                    return (
                        <button
                            onClick={() => handlePageChange(pageNumber)}
                            key={pageNumber}
                            className={`btn btn-xs sm:btn-md border-none join-item ${
                                pageNumber === number ? "bg-base-300 border-base-300" : ""
                            }`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
                <button
                    className="btn btn-xs sm:btn-md join-item"
                    onClick={() => {
                        let nextPage = number + 1;
                        if (nextPage > totalPages) nextPage = 1;
                        handlePageChange(nextPage);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};
export default PaginationContainer;
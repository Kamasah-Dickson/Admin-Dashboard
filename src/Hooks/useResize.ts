import { useEffect, useState } from "react";

function useResize() {
	const [size, setSize] = useState(window.innerWidth);

	function Resize() {
		setSize(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", Resize);

		return () => {
			window.removeEventListener("resize", Resize);
		};
	}, [size]);

	return { size };
}

export default useResize;

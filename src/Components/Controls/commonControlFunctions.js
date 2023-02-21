export const setModalBox = (setOpenModalBox ) => {
		setOpenModalBox(prev => !prev);
};
    
export const handleDelete = (setshowTextField) => {
    if (window.confirm("Are you sure you want to delete this Field?")) {
        setshowTextField(false);
    }
}
function PageBar(props) {
    // console.log(props);
    const returnNums = (num) => {
        //@todo
    }
    return (
        <div className='page-bar'>
            {returnNums(props.page)}
        </div>
    );
}

export default PageBar;

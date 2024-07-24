/* eslint-disable react/prop-types */
const ErrorMessage = (props)=>{
    let {items} = props;
    return<> 
       {items.length === 0 ? <h3>No fruits available</h3> : null}
    </>
  
};

export default ErrorMessage;
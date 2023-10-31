import React, { useState } from "react";
import _ from "lodash";
import Main from './main';

function search(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key,setKey] = useState('');
    console.log("key",key)
    const cusSearch = _.filter(props.customers, function(o) { 
        return _.includes(o.CustomerName ,key)
      });
    
    const onsubmit=()=>{
        props.onSearch();
        console.log(cusSearch)
    }
    const offsubmit = ()=>{
        props.offSearch();
    }
    return (
       
        <div className="input-group">
             
            <input
                name="keyword"
                value = {key}
                type="text"
                className="form-control"
                placeholder="Nhập từ khóa..."
                onChange={event => setKey(event.target.value)}
            />
            <span className="input-group-btn" style={{marginTop: 20, marginRight: 5}}>
                <button className="btn btn-primary" type="button" 
                        onClick={onsubmit}
                >
                    <span className="fa fa-search mr-2"></span>Tìm
                </button>
                <button className="btn btn-warning" type="button" 
                        onClick={offsubmit}
                >
                    <span className="fa fa-times-circle mr-2"></span>Hủy
                </button>
            </span>
        </div>
    );
}

export default search;
import React from "react";

export default function (props) {

    return {
        '_type': 'Parrot',
        'render' : function(){
            return (
                    <img src={this.src}
                         data-src={this.dataSrc}
                         alt="Parrot">

                    </img>
            )
        },
        'isVisible' : function(){
          return  this.visible.toUpperCase() === "ON"
        },
        ...props
    }
}
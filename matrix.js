
/**
 *  The MIT License (MIT)
 *  @license https://github.com/icai/ac-matrix 
 *  @author icai
 *  @description Javascript Array Matrix converting library
 *  
 */

(function(window,undefined){

	var matrix = {};

	/**
	 * istypeOf Object return Boolean
	 * @param  {Object} data instanceof Object
	 * @param  {String} type the type of data
	 * @return {Boolean}      
	 */
	function istypeOf(data,type){
		return Object.prototype.toString.call(data).slice(8,-1) == type;
	}


	/**
	 * walk the array 
	 * @param  {[type]}   data     [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	function array_walk(/*deep,*/ data,callback){
		var deep = false;
		if(istypeOf(data,"Boolean")){
			deep = data;
			data = callback;
			callback = arguments[2];
		}
		var d = -1;
		while(data[++d]){
			if(istypeOf(data[d],"Array") && deep){
				array_walk(deep,data[d],callback);
			}else{
				 callback(data[d])
			}
		}
	}

	/**
	 * return One -dimensional  arrays
	 * @param  {array} a array
	 * @param  {array} b array
	 * @param  {array} c array
	 * @return {function}   callback function to format the data format
	 */
	function matrixSingle(a,b,c){
		var args = [].slice.call(arguments,0),
			callback = args.slice(-1)[0],
			data = args.slice(0,args.length-1);

		var _cacheloop = [],_calldata=[],_i = 105,
			_loop = function(data,i){
				var ct = String.fromCharCode(_i+ i);
				_cacheloop.splice(_cacheloop.length/2,0,
					"for (var "+ ct +" = 0; "+ ct +" < data["+ i +"].length; "+ ct +"++) {","}"
				 );
				_calldata.push("data["+ i +"]["+ ct +"]");
		    };
			for (var i = 0; i < data.length; i++) {
				_loop(data[i],i);
			};
			_cacheloop.splice(_cacheloop.length/2,0,
				"var rValue = callback.call(this,"+ _calldata.join(",") +");"+
				"if(rValue != undefined){"+
					"rArray.push(rValue);"+
				"}"
			)
		   	var   fn = new Function ('data','callback',
		        'var rArray = [];'+
		          _cacheloop.join("\n") +
		        'return rArray;'
		    );
	   return fn(data,callback);
	}
	/**
	 * return Multidimensional arrays
	 * @param  {array} a array
	 * @param  {array} b array
	 * @param  {array} c array
	 * @return {function}   callback function to format the data format
	 */
	function matrixMulti(a,b,c){
		var args = [].slice.call(arguments,0),
			callback = args.slice(-1)[0],
			data = args.slice(0,args.length-1);
		var _cacheloop = [],_calldata=[],_i = 105,
			_dims = function(name,depth,isend){
				var t = "";
				for (var i = 0; i <= depth; i++) {
					t += "["+ String.fromCharCode(_i + i) + "]"; 
				};
				if(!isend){
					return name + t +" = [];"
				}else{
					return  name + t + " = callback.call(this,"+ _calldata.join(",") +");"
				}
			 },
			_loop = function(isend,i){
				var ct = String.fromCharCode(_i+ i),_ins;
				_calldata.push("data["+ i +"]["+ ct +"]");
				_ins = _dims("rArray",i,isend);
				_cacheloop.splice(_cacheloop.length/2,0,
					"for (var "+ ct +" = 0; "+ ct +" < data["+ i +"].length; "+ ct +"++) {"+ _ins ,"}"
				 );
		    };
			for (var i = 0,len = data.length; i < len; i++) {
				i != len - 1 ? _loop(false,i) : _loop(true,i)
			};
		   	var   fn = new Function ('data','callback',
		        'var rArray = [];'+
		          _cacheloop.join("\n") +
		        'return rArray;'
		    );
	   return fn(data,callback);
	}


	/**
	 * return the depth of matrix  array
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	function matrixDepth(data){
		var depth = 0,temp;
			temp = data;
		while(istypeOf(temp,'Array')){
			depth++;
			temp = temp[0];
		}
		return depth;
	}
	/**
	 * multi matrix convert to single matrix 
	 * @param  {Array} data   matrix array
	 * @return {Array}      single matrix
	 */
	function matrixM2s(data){
		var rArray = [];
		array_walk(true,data,function(d){
			rArray.push(d);
		})
		return rArray;
	}

	/**
	 * import global variables
	 * @type {Object}
	 */
	matrix = {
		m2s:matrixM2s,
		depth:matrixDepth,
		multi:matrixMulti,
		single:matrixSingle,
		walk:array_walk
	};
	window.matrix = matrix;
})(window)
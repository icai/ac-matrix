ac-matrix
=========

Javascript Array Matrix converting library for constructing the developing simulation data and building the test list.




##usage

    var arra = [1,2,3,4];
    var arrb = ["a","b","c","d"];
    var arrc = ["A","B","C","D"];
    var arrd = ["α","β","γ","δ"];
    var m2sData = [
    	[
    		["1-a-A", "1-a-B", "1-a-C", "1-a-D"],
    		["1-b-A", "1-b-B", "1-b-C", "1-b-D"],
    		["1-c-A", "1-c-B", "1-c-C", "1-c-D"],
    		["1-d-A", "1-d-B", "1-d-C", "1-d-D"]
    	],
    	[
    		["2-a-A", "2-a-B", "2-a-C", "2-a-D"],
    		["2-b-A", "2-b-B", "2-b-C", "2-b-D"],
    		["2-c-A", "2-c-B", "2-c-C", "2-c-D"],
    		["2-d-A", "2-d-B", "2-d-C", "2-d-D"]
    	],
    	[
    		["3-a-A", "3-a-B", "3-a-C", "3-a-D"],
    		["3-b-A", "3-b-B", "3-b-C", "3-b-D"],
    		["3-c-A", "3-c-B", "3-c-C", "3-c-D"],
    		["3-d-A", "3-d-B", "3-d-C", "3-d-D"]
    	],
    	[
    		["4-a-A", "4-a-B", "4-a-C", "4-a-D"],
    		["4-b-A", "4-b-B", "4-b-C", "4-b-D"],
    		["4-c-A", "4-c-B", "4-c-C", "4-c-D"],
    		["4-d-A", "4-d-B", "4-d-C", "4-d-D"]
    	]
    ];


###matrix.single
    var ms = matrix.single(arra,arrb,arrc,function(a,b,c){
    	return a +"-"+ b +"-"+ c ; // +"-"+ d
    });

    //["1-a-A","1-a-B","1-a-C","1-a-D","1-b-A","1-b-B","1-b-C","1-b-D","1-c-A","1-c-B","1-c-C","1-c-D","1-d-A","1-d-B","1-d-C","1-d-D","2-a-A","2-a-B","2-a-C","2-a-D","2-b-A","2-b-B","2-b-C","2-b-D","2-c-A","2-c-B","2-c-C","2-c-D","2-d-A","2-d-B","2-d-C","2-d-D","3-a-A","3-a-B","3-a-C","3-a-D","3-b-A","3-b-B","3-b-C","3-b-D","3-c-A","3-c-B","3-c-C","3-c-D","3-d-A","3-d-B","3-d-C","3-d-D","4-a-A","4-a-B","4-a-C","4-a-D","4-b-A","4-b-B","4-b-C","4-b-D","4-c-A","4-c-B","4-c-C","4-c-D","4-d-A","4-d-B","4-d-C","4-d-D"] 


###matrix.multi

    var mm = matrix.multi(arra,arrb,arrc,function(a,b,c){
    	return a +"-"+ b +"-"+ c ; // +"-"+ d
    });

    //[[["1-a-A","1-a-B","1-a-C","1-a-D"],["1-b-A","1-b-B","1-b-C","1-b-D"],["1-c-A","1-c-B","1-c-C","1-c-D"],["1-d-A","1-d-B","1-d-C","1-d-D"]],[["2-a-A","2-a-B","2-a-C","2-a-D"],["2-b-A","2-b-B","2-b-C","2-b-D"],["2-c-A","2-c-B","2-c-C","2-c-D"],["2-d-A","2-d-B","2-d-C","2-d-D"]],[["3-a-A","3-a-B","3-a-C","3-a-D"],["3-b-A","3-b-B","3-b-C","3-b-D"],["3-c-A","3-c-B","3-c-C","3-c-D"],["3-d-A","3-d-B","3-d-C","3-d-D"]],[["4-a-A","4-a-B","4-a-C","4-a-D"],["4-b-A","4-b-B","4-b-C","4-b-D"],["4-c-A","4-c-B","4-c-C","4-c-D"],["4-d-A","4-d-B","4-d-C","4-d-D"]]] 



###matrix.m2s
    var m2s = matrix.m2s(m2sData);

    // ["1-a-A","1-a-B","1-a-C","1-a-D","1-b-A","1-b-B","1-b-C","1-b-D","1-c-A","1-c-B","1-c-C","1-c-D","1-d-A","1-d-B","1-d-C","1-d-D","2-a-A","2-a-B","2-a-C","2-a-D","2-b-A","2-b-B","2-b-C","2-b-D","2-c-A","2-c-B","2-c-C","2-c-D","2-d-A","2-d-B","2-d-C","2-d-D","3-a-A","3-a-B","3-a-C","3-a-D","3-b-A","3-b-B","3-b-C","3-b-D","3-c-A","3-c-B","3-c-C","3-c-D","3-d-A","3-d-B","3-d-C","3-d-D","4-a-A","4-a-B","4-a-C","4-a-D","4-b-A","4-b-B","4-b-C","4-b-D","4-c-A","4-c-B","4-c-C","4-c-D","4-d-A","4-d-B","4-d-C","4-d-D"] 


###matrix.walk
    matrix.walk(true,m2sData,function(d){
    	console.log("The current data is:"+ d);
    });
    // The current data is:1-a-A 
    // The current data is:1-a-B
	// ...

###matrix.depth

	// return the depth of array dimension 
	// only for standard matrix
    matrix.depth(m2sData);
	
	// 3

     error for  matrix.depth([1,2,[1,2,[1,2]]]),

	 just check the first item of array

##Use for What？

 combine Request parameters（http）building the url to create the test.
 
> [https://github.com/icai/iNote/blob/master/casperjs/cacheweb.js#L145](https://github.com/icai/iNote/blob/master/casperjs/cacheweb.js#L145)

construct the developing simulation data.

>build the list of json
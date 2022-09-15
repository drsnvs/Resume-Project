$(function(){
	$('#africa-map').vectorMap({
		map: 'africa_map',
		backgroundColor: '#4d3b86',
		regionStyle: {
			initial: {
				fill: '#fff'
			}
		}
	});
	$('#asia-map').vectorMap({
	  map: 'asia_map',
		  backgroundColor: '#4d3b86',
		  regionStyle: {
			  initial: {
				  fill: '#fff'
			  }
		  }
	});
	$('#continents-map').vectorMap({
	  map: 'continents_map',
		  backgroundColor: '#4d3b86',
		  regionStyle: {
			  initial: {
				  fill: '#fff'
			  }
		  }
	});
	$('#europe-map').vectorMap({
	  map: 'europe_map',
		  backgroundColor: '#4d3b86',
		  regionStyle: {
			  initial: {
				  fill: '#fff'
			  }
		  }
	});
	$('#north_america-map').vectorMap({
	  map: 'north_america_map',
		  backgroundColor: '#4d3b86',
		  regionStyle: {
			  initial: {
				  fill: '#fff'
			  }
		  }
	});
	$('#oceanina-map').vectorMap({
	  map: 'oceania_map',
		  backgroundColor: '#4d3b86',
		  regionStyle: {
			  initial: {
				  fill: '#fff'
			  }
		  }
	});
	$('#south-america-map').vectorMap({
	  map: 'south_america_map',
		  backgroundColor: '#4d3b86',
		  regionStyle: {
			  initial: {
				  fill: '#fff'
			  }
		  }
	});
	$('#world-map').vectorMap({
	   	map: 'world_map',
		backgroundColor: '#4d3b86',
		borderColor: '#818181',
		borderOpacity: 0.25,
		borderWidth: 1,
		color: '#f4f3f0',
		regionStyle: {
			initial: {
				fill: '#fff'
			}
		},
		markerStyle: {
		 	initial: {
				r: 9,
				'fill': '#fff',
				'fill-opacity': 1,
				'stroke': '#000',
				'stroke-width': 5,
				'stroke-opacity': 0.4
			},
		},
		enableZoom: true,
		hoverColor: '#060818',
		hoverOpacity: null,
		normalizeFunction: 'linear',
		scaleColors: ['#b6d6ff', '#005ace'],
		selectedColor: '#c9dfaf',
		selectedRegions: [],
		showTooltip: true,
	});
});
   
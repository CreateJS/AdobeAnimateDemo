(function() {
	var Collision = function() {};
	
	Collision.test = function(o, group2, remove) {
		var ox= o.x, oy= o.y, or= o.radius, dx=0.1, dy=0.1, o2;
		
		for (var i=group2.length-1; i>=0; i--) {
			o2 = group2[i];
			dx = ox-o2.x;
			dy = oy-o2.y;
			if (Math.sqrt(dx*dx+dy*dy) < or+o2.radius) {
				if (remove) { group2.splice(i, 1); }
				return o2;
			}
		}
		return null;
	}
	
	window.Collision = Collision;
})();
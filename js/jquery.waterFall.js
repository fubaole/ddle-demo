
$.fn.waterFall = function (options) {
	var defaults = {
		gap: 20
	}

	// 默认参数
	defaults = $.extend(defaults, options);

	var _this = $(this),
		items = _this.children(),
		width = items.width(),
		height = 0,
		gap = defaults.gap,
		// 计算总共可以放几列
		count = Math.floor(_this.width() / (width + gap)),
		// 用数组来记录每一列的高度值
		columns = [];

	// 遍历所有item 并设置其相应的left top 值
	items.each(function (key, val) {
		// 获取每一个元素的高度
		height = $(val).height();

		// 第一行的处理
		if(key < count) {
			// 记录第一行第一列的高度
			columns[key] = height;

			// 设置第一行的定位坐标
			$(val).css({
				position: 'absolute',
				top: 0,
				left: (width + gap) * key
			});			
		} else {
			var min_val = columns[0],
				min_key = 0;

			for(var i=0; i<columns.length; i++) {
				if(columns[i] < min_val) {
					min_val = columns[i];
					min_key = i;
				}
			}

			// 需要更新每列的高度
			columns[min_key] += height + gap;

			// 设置第一行之外的定位坐标
			$(val).css({
				position: 'absolute',
				top: min_val + gap,
				left: (width + gap) * min_key
			});
		}

		var max_val = columns[0];

		for(var j=0; j<columns.length; j++) {
			if(columns[j] > max_val) {
				max_val = columns[j];
			}
		}

		_this.css('height', max_val);

	});

}
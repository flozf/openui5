/*!
 * ${copyright}
 */

sap.ui.define(['jquery.sap.global', 'sap/ui/core/Renderer', './CalendarRenderer'],
	function(jQuery, Renderer, CalendarRenderer) {
	"use strict";


	/**
	 * CalendarDateInterval renderer.
	 * @namespace
	 */
	var CalendarDateIntervalRenderer = Renderer.extend(CalendarRenderer);

	CalendarDateIntervalRenderer.addAttributes = function(oRm, oCal){

		oRm.addClass("sapUiCalDateInt");

		if (oCal.getDays() > oCal._iDaysLarge) {
			oRm.addClass("sapUiCalDateIntLarge");
		}

		if (oCal.getDays() > oCal._iDaysMonthHead) {
			oRm.addClass("sapUiCalDateIntMonthHead");
		}

		var sWidth = oCal.getWidth();
		if (sWidth && sWidth != '') {
			oRm.addStyle("width", sWidth);
			oRm.writeStyles();
		}

	};

	return CalendarDateIntervalRenderer;

}, /* bExport= */ true);

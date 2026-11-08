//XJS=Lib_Grid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /************************************************************************************************
         * Common grid functions (sorting, paging)
         * Included by Lib_Comm.xjs
         ************************************************************************************************/
        this.LFN_SORT_MARK = [" ▲", " ▼"];

        /**
         * Click a head cell to sort by its column, click again to reverse.
         * Sorts the bound dataset on the client (keystring), so use it for lists loaded at once.
         * arrSortCol : dataset column of each head cell, needed for cells that show an expr
         *              (without it only "bind:" cells can be sorted)
         */
        this.lfn_setGridSort = function(objGrid, arrSortCol)
        {
        	objGrid.lfv_sortCol = "";
        	objGrid.lfv_sortDesc = false;
        	objGrid.lfv_sortCols = arrSortCol || [];
        	objGrid.addEventHandler("onheadclick", this.lfn_gridSort_onheadclick, this);
        };

        this.lfn_gridSort_onheadclick = function(obj, e)
        {
        	var sCol = obj.lfv_sortCols[e.cell];
        	if (this.lfn_isNull(sCol)) {
        		var sBind = obj.getCellProperty("body", e.cell, "text");
        		if (this.lfn_isNull(sBind) || String(sBind).indexOf("bind:") != 0) {
        			return;
        		}
        		sCol = String(sBind).substr(5);
        	}
        	obj.lfv_sortDesc = (obj.lfv_sortCol == sCol) ? !obj.lfv_sortDesc : false;
        	obj.lfv_sortCol = sCol;

        	obj.getBindDataset().set_keystring("S:" + (obj.lfv_sortDesc ? "-" : "+") + sCol);

        	// one sort mark, on the clicked head cell
        	for (var i = 0; i < obj.getCellCount("head"); i++) {
        		var sText = String(obj.getCellProperty("head", i, "text")).replace(this.LFN_SORT_MARK[0], "").replace(this.LFN_SORT_MARK[1], "");
        		if (i == e.cell) {
        			sText += this.LFN_SORT_MARK[obj.lfv_sortDesc ? 1 : 0];
        		}
        		obj.setCellProperty("head", i, "text", sText);
        	}
        };

        /**
         * Updates the paging bar and returns the number of pages.
         * nPage is 1 based.
         */
        this.lfn_setPaging = function(nPage, nTotalCount, nPageSize, objStatic, objPrev, objNext)
        {
        	var nTotalPage = Math.max(1, Math.ceil(nTotalCount / nPageSize));
        	objStatic.set_text("Page " + nPage + " of " + nTotalPage);
        	objPrev.set_enable(nPage > 1);
        	objNext.set_enable(nPage < nTotalPage);
        	return nTotalPage;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();

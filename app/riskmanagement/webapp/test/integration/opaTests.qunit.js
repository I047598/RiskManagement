sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanage07/riskmanagement/test/integration/FirstJourney',
		'riskmanage07/riskmanagement/test/integration/pages/RisksList',
		'riskmanage07/riskmanagement/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanage07/riskmanagement') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);
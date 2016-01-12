/**
 * Homepage tests.
 *
 * @see http://casperjs.readthedocs.org/en/latest/modules/tester.html
 */
casper.test.begin('Redirects', 20, function suite(test) {

  // Redirect Acquia hostname to FQDN.
  casper.start("http://iagcorp.prod.acquia-sites.com/" + '?' + timestamp, function() {
    //require('utils').dump(response);
    test.assertHttpStatus(200);
    test.assertEquals("http://" + site + "/" + '?' + timestamp, this.getCurrentUrl());
  });
  casper.thenOpen("https://iagcorp.prod.acquia-sites.com/" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals("http://" + site + "/" + '?' + timestamp, this.getCurrentUrl());
  });

  // AGM page (30th October).
  casper.thenOpen('http://' + siteApex + "/shareholder/agm/index.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + siteApex + "/shareholder-centre/annual-meetings" + '?' + timestamp, this.getCurrentUrl());
  });
  casper.thenOpen('https://' + siteApex + "/shareholder/agm/index.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + siteApex + "/shareholder-centre/annual-meetings" + '?' + timestamp, this.getCurrentUrl());
  });
  casper.thenOpen('http://' + site + "/shareholder/agm/index.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + site + "/shareholder-centre/annual-meetings" + '?' + timestamp, this.getCurrentUrl());
  });
  casper.thenOpen('https://' + site + "/shareholder/agm/index.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + site + "/shareholder-centre/annual-meetings" + '?' + timestamp, this.getCurrentUrl());
  });

  // Governance Codes Page
  casper.thenOpen('http://' + siteApex + "/about/governance/codes.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + siteApex + "/about-us/corporate-governance/codes-and-policies" + '?' + timestamp, this.getCurrentUrl());
  });
  casper.thenOpen('https://' + siteApex + "/about/governance/codes.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + siteApex + "/about-us/corporate-governance/codes-and-policies" + '?' + timestamp, this.getCurrentUrl());
  });
  casper.thenOpen('http://' + site + "/about/governance/codes.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + site + "/about-us/corporate-governance/codes-and-policies" + '?' + timestamp, this.getCurrentUrl());
  });
  casper.thenOpen('https://' + site + "/about/governance/codes.shtml" + '?' + timestamp, function() {
    test.assertHttpStatus(200);
    test.assertEquals('http://' + site + "/about-us/corporate-governance/codes-and-policies" + '?' + timestamp, this.getCurrentUrl());
  });

  casper.run(function() {
    test.done();
  });

});

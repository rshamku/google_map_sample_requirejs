package com.google.map.sample.controller;

import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//This solution is good for specific requests made to a service from scripts, e.g. CSS, JS, etc...
@Controller
@RequestMapping("/cacheHeaderController")
public class CacheHeaderController {
	@RequestMapping(method = RequestMethod.GET, produces="application/json")
	public String getResponseHeader(final HttpServletResponse httpServletResponse){
		httpServletResponse.setHeader("Cache-Control", "private, must-revalidate");
		httpServletResponse.setHeader("max-age", "10");
		httpServletResponse.setHeader("Accept-Encoding", "compress,gzip");
		return "index";
	}
	
}

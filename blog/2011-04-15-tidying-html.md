---
layout: post
title: 
				Tidying HTML		
date: 2011-04-15 22:24
author: emjaune
comments: true
categories: [Lifehacks, Software, Tips, Tutorials]
---
<span style="font-weight: 400;">This really isn't a post about user experience directly, it's more a mini tutorial with a tool I sometimes use for coding HTML. I use Notepad++ to code my HTML, partially because it's like Notepad, but it has niftier features like automatically color coding tags for me and cleaning up the alignment, indentation, and removing unnecessary line breaks.</span>

<span style="font-weight: 400;">A colleague and I just discovered the HTML Tidy plug-in that comes with Notepad++ TextFX menu option may be a bit lacking and here's what we discovered to fix it:</span>
<ol>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Open the TIDYCFG.INI file (if you're missing the HTML Tidy options from the menu, then you may be missing </span><a href="http://connections.rim.net/files/form/anonymous/api/library/e180525b-2021-427f-a411-b5f31ef0c226/document/d80535d0-76cd-49a7-a08a-28760fba917b/media/HTMLTidy.zip"><span style="font-weight: 400;">some files</span></a><span style="font-weight: 400;">, which you'll need to install in C:\Program Files\Notepad++\plugins\Config\tidy) <img class="alignnone size-full wp-image-151" src="https://ux.happyhippos.ca/wp-content/uploads/2017/11/textfx.jpg" alt="" width="442" height="358" /></span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">   </span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Edit an existing menu item. We chose the XHTML one, and tweaked it to look like the following:</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">[Tidy convert to XHTML]</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">add-xml-decl:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">;add-xml-pi:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">alt-text:Image</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">break-before-br:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">clean:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">doctype:auto</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">drop-empty-paras:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">drop-font-tags:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">;error-file:error.log</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">fix-backslash:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">fix-bad-comments:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">hide-endtags:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">;char-encoding:raw</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">indent:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">indent-spaces:2</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">input-xml:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">markup:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">output-xhtml:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">output-xml:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">quiet:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">tidy-mark:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">uppercase-attributes:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">uppercase-tags:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">word-2000:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">wrap:0</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">wrap-asp:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">wrap-attributes:no</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">wrap-jste:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">wrap-php:yes</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">write-back:yes</span></li>
</ol>
<span style="font-weight: 400;">Key changes: leaves any special HTML characters alone ( like &amp;reg; ) and removes extra line breaks to make a very clean looking file (even adds declaration tags for you should you have left it out).</span>

<span style="font-weight: 400;">If you want to figure out the definition of each command, you can view it at </span><a href="http://tidy.sourceforge.net/docs/quickref.html"><span style="font-weight: 400;">http://tidy.sourceforge.net/docs/quickref.html</span></a>

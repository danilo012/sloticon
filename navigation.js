useEffect (() ⇒ {

const handleResize = () ⇒ { if (window.innerWidth > 767) { set ShowMobileNavView(false); setMobileNavOpen(false);

} else if (window.innerWidth < 767) { set ShowMobileNavView(true);

}

};

window.addEventListener('resize', handleResize);

return () {

};

window.removeEventListener('resize', handleResize);

}, []);

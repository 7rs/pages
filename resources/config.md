# About config  

[service-names-port-numbers]: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
[search_unassigned]: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?search=Unassigned
[list_of_tcp_and_udp_port_numbers]: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

## Port  

  Pages doesn't use default port that used by Astro.
  Those are ports commonly used for development:  

<!--  -->
| Port      | Description |
| --------- | ----------- |
| 2998      | Real Secure |
| 2999      | RemoteWare Unassigned |
| 3000      | HBCI, RemoteWare Client (Ruby on Rails) |
| 4000      | Terabase, ICQ, Diablo II |
| 4321      | Remote Who Is (Astro default) |
| 5173-5189 | Unassigned (5173: Vite) |
| 8080      | HTTP Alternate, Apache Tomcat |
| 8888      | NewsEDGE server TCP, HyperVM (Known Unauthorized Use) |
<!--  -->

  Also recommend referring to those pages:  

<!--  -->
- [IANA - Service Name and Transport Protocol Port Number Registry][service-names-port-numbers]
- [IANA (Search for 'Unassigned')][search_unassigned]
- [Wikipedia - List of TCP and UDP port numbers][list_of_tcp_and_udp_port_numbers]
<!--  -->

[safelisting]: https://purgecss.com/safelisting.html

## Why is PurgeCSS disabled?  

  Svelte removes HTML and CSS comments.  
  This feature is useful, but they removes the ignore comment for PurgeCSS.  

  > [PurgeCSS - Safelisting][safelisting]
  >
  > You can indicate which selectors are safe to leave in the final CSS.
  > This can be accomplished with the PurgeCSS option safelist,
  > or directly in your CSS with a special comment.

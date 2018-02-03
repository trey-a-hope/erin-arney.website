import { Component, OnInit } from '@angular/core';
import { BlogService }       from '../../services/blog.service';
import { Router }            from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: [any];

  constructor(
    private blogService : BlogService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getBlogPosts();
  }

  private getBlogPosts(): void {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  private goToBlog(postId: number): void {
    this.router.navigate(['/full-blog'], { queryParams: { id: postId } });
  }

  public share(provider: string, blogUrl: string): void {
    var text: string = 'Check out this blog I found on td5.tr3umphant-designs.com!';

    switch (provider) {
        case 'TWITTER':
            window.open('http://twitter.com/share?url='+encodeURIComponent(blogUrl)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        case 'FACEBOOK':
            window.open('http://facebook.com/sharer/sharer.php?u='+encodeURIComponent(blogUrl)+'&title='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        case 'LINKEDIN':
            window.open('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(blogUrl)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        case 'GOOGLE+':
            window.open('https://plus.google.com/share?url='+encodeURIComponent(blogUrl)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            break;
        default:
            break;
    }
  }

}

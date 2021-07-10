import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Photo } from "../interface/photo";
import { buildPhotoList } from "../photo-board/test/build-photos-list";
import { PhotoBoardService } from "./photo-board.service";

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService{
    public getPhotos(): Observable<Photo[]>{
        return of(buildPhotoList());
    }
}
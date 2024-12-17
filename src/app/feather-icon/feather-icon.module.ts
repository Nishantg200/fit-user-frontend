import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, AlignLeft, Sliders, BarChart2, Edit3, ShoppingCart, Search, Moon, User, AlertCircle, Calendar, Bell, PieChart, Clock, Mail, Home, Phone, BookOpen, MapPin, Loader, TrendingUp, Map, ShoppingBag, Tag, Trash2, Minimize, DollarSign, CheckCircle, Percent, Database, Linkedin, UserCheck, Coffee, Flag, Globe, TrendingDown, Headphones, PlayCircle, Star, Info, MoreVertical, Users, List, Dribbble, Briefcase, Layers, Youtube, Check, Key, Share2, Command, Twitch, FileText, Copy, X, Code, Octagon, Codepen, Facebook, Twitter, UserPlus, Settings, Link, Meh, Lock, Smile, Activity, MessageSquare, Folder, File, Send, Trash, AlertTriangle, Crosshair, Plus, Table, FileMinus, Edit, ThumbsUp, Grid } from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
    Camera,
    Heart,
    Lock,
    Table,
    Send,
    Activity,
    ThumbsUp,
    Edit,
    Github,
    AlignLeft,
    AlertTriangle,
    FileMinus,
    Crosshair,
    Twitch,
    Plus,
    Youtube,
    File,
    Folder,
    Trash,
    Link,
    Meh,
    Facebook,
    Twitter,
    UserPlus,
    Codepen,
    Smile,
    Settings,
    Linkedin,
    Dribbble,
    X,
    ShoppingBag,
    Octagon,
    MapPin,
    Command,
    FileText,
    Copy,
    Flag,
    List,
    Share2,
    PlayCircle,
    UserCheck,
    BookOpen,
    Key,
    Search,
    Check,
    Coffee,
    Code,
    Star,
    Headphones,
    Moon,
    Briefcase,
    MessageSquare,
    Users,
    Map,
    BarChart2,
    Info,
    Calendar,
    Loader,
    AlertCircle,
    MoreVertical,
    Minimize,
    Bell,
    Phone,
    Edit3,
    Clock,
    Tag,
    Globe,
    Trash2,
    DollarSign,
    Percent,
    Database,
    CheckCircle,
    ShoppingCart,
    Sliders,
    Layers,
    User,
    Mail,
    PieChart,
    Home,
    TrendingUp,
    TrendingDown,
    Grid
};

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FeatherModule.pick(icons)
    ],
    exports: [
        FeatherModule
    ]
})
export class FeathericonsModule { }
var state_arr = new Array("Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal");


var s_a = new Array();
s_a[0] = "";
s_a[1] = "Anantapur|Chittoor|East Godavari|Guntur|Krishna|Kurnool|Prakasam|Srikakulam|SriPotti Sri Ramulu Nellore|Vishakhapatnam|Vizianagaram|West Godavari|Cudappah";
s_a[2] = "Anjaw|Changlang|Dibang Valley|East Siang|East Kameng|Kurung Kumey|Lohit|Longding|Lower Dibang Valley|Lower Subansiri|Papum Pare|Tawang|Tirap|Upper Siang|Upper Subansiri|West Kameng|West Siang";
s_a[3] = "Baksa|Barpet|Bongaigaon|Cachar|Chirang|Darrang|Dhemaji|Dima Hasao|Dhubri|Dibrugarh|Goalpara|Golaghat|Hailakandi|Jorhat|Kamrup|Kamrup Metropolitan|Karbi Anglong|Karimganj|Kokrajhar|Lakhimpur|Morigaon|Nagaon|Nalbari|Sivasagar|Sonitpur|Tinsukia|Udalguri";
s_a[4] = "Araria|Arwal|Aurangabad|Banka|Begusarai|Bhagalpur|Bhojpur|Buxar|Darbhanga|East Champaran|Gaya|Gopalganj|Jamui|Jehanabad|Kaimur|Katihar|Khagaria|Kishanganj|Lakhisarai|Madhepura|Madhubani|Munger|Muzaffarpur|Nalanda|Nawada|Patna|Purnia|Rohtas|Saharsa|Samastipur|Saran|Sheikhpura|Sheohar|Sitamarhi|Siwan|Supaul|Vaishali|West Champaran";
s_a[5] = "Bastar|Bijapur|Bilaspur|Dantewada|Dhamtari|Durg|Jashpur|Janjgir-Champa|Korba|Koriya|Kanker|Kabirdham (formerly Kawardha)|Mahasamund|Narayanpur|Raigarh|Rajnandgaon|Raipur|Surajpur|Surguja";
s_a[6] = "Amal|Silvassa";
s_a[7] = "Daman|Diu";
s_a[8] = "Delhi|New Delhi|North Delhi|Noida|Patparganj|Sonabarsa|Tughlakabad";
s_a[9] = "Chapora|Dabolim|Madgaon|Marmugao (Marmagao)|Panaji Port|Panjim|Pellet Plant Jetty/Shiroda|Talpona|Vasco da Gama";
s_a[10] = "Ahmedabad|Amreli district|Anand|Aravalli|Banaskantha|Bharuch|Bhavnagar|Dahod|Dang|Gandhinagar|Jamnagar|Junagadh|Kutch|Kheda|Mehsana|Narmada|Navsari|Patan|Panchmahal|Porbandar|Rajkot|Sabarkantha|Surendranagar|Surat|Tapi|Vadodara|Valsad";
s_a[11] = "Ambala|Bhiwani|Faridabad|Fatehabad|Gurgaon|Hissar|Jhajjar|Jind|Karnal|Kaithal|Kurukshetra|Mahendragarh|Mewat|Palwal|Panchkula|Panipat|Rewari|Rohtak|Sirsa|Sonipat|Yamuna Nagar";
s_a[12] = "Baddi|Baitalpur|Chamba|Dharamsala|Hamirpur|Kangra|Kinnaur|Kullu|Lahaul & Spiti|Mandi|Simla|Sirmaur|Solan|Una";
s_a[13] = "Jammu|Leh|Rajouri|Srinagar";
s_a[14] = "Bokaro|Chatra|Deoghar|Dhanbad|Dumka|East Singhbhum|Garhwa|Giridih|Godda|Gumla|Hazaribag|Jamtara|Khunti|Koderma|Latehar|Lohardaga|Pakur|Palamu|Ramgarh|Ranchi|Sahibganj|Seraikela Kharsawan|Simdega|West Singhbhum";
s_a[15] = "Bagalkot|Bangalore|Bangalore Urban|Belgaum|Bellary|Bidar|Bijapur|Chamarajnagar|Chikkamagaluru|Chikkaballapur|Chitradurga|Davanagere|Dharwad|Dakshina Kannada|Gadag|Gulbarga|Hassan|Haveri district|Kodagu|Kolar|Koppal|Mandya|Mysore|Raichur|Shimoga|Tumkur|Udupi|Uttara Kannada|Ramanagara|Yadgir";
s_a[16] = "Alappuzha|Ernakulam|Idukki|Kannur|Kasaragod|Kollam|Kottayam|Kozhikode|Malappuram|Palakkad|Pathanamthitta|Thrissur|Thiruvananthapuram|Wayanad";
s_a[17] = "Alirajpur|Anuppur|Ashoknagar|Balaghat|Barwani|Betul|Bhilai|Bhind|Bhopal|Burhanpur|Chhatarpur|Chhindwara|Damoh|Dewas|Dhar|Guna|Gwalior|Hoshangabad|Indore|Itarsi|Jabalpur|Khajuraho|Khandwa|Khargone|Malanpur|Malanpuri (Gwalior)|Mandla|Mandsaur|Morena|Narsinghpur|Neemuch|Panna|Pithampur|Raipur|Raisen|Ratlam|Rewa|Sagar|Satna|Sehore|Seoni|Shahdol|Singrauli|Ujjain";
s_a[18] = "Ahmednagar|Akola|Alibag|Amaravati|Arnala|Aurangabad|Aurangabad|Bandra|Bassain|Belapur|Bhiwandi|Bhusaval|Borliai-Mandla|Chandrapur|Dahanu|Daulatabad|Dighi (Pune)|Dombivali|Goa|Jaitapur|Jalgaon|Jawaharlal Nehru (Nhava Sheva)|Kalyan|Karanja|Kelwa|Khopoli|Kolhapur|Lonavale|Malegaon|Malwan|Manori|Mira Bhayandar|Miraj|Mumbai (ex Bombay)|Murad|Nagapur|Nagpur|Nalasopara|Nanded|Nandgaon|Nasik|Navi Mumbai|Nhave|Osmanabad|Palghar|Panvel|Pimpri|Pune|Ratnagiri|Sholapur|Shrirampur|Shriwardhan|Tarapur|Thana|Thane|Trombay|Varsova|Vengurla|Virar|Wada";
s_a[19] = "Bishnupur|Churachandpur|Chandel|Imphal East|Senapati|Tamenglong|Thoubal|Ukhrul|Imphal West";
s_a[20] = "Baghamara|Balet|Barsora|Bolanganj|Dalu|Dawki|Ghasuapara|Mahendraganj|Moreh|Ryngku|Shella Bazar|Shillong";
s_a[21] = "Aizawl|Champhai|Kolasib|Lawngtlai|Lunglei|Mamit|Saiha|Serchhip";
s_a[22] = "Dimapur|Kiphire|Kohima|Longleng|Mokokchung|Mon|Peren|Phek|Tuensang|Wokha|Zunheboto";
s_a[23] = "Bahabal Pur|Bhubaneswar|Chandbali|Gopalpur|Jeypore|Paradip Garh|Puri|Rourkela";
s_a[24] = "Karaikal|Mahe|Pondicherry|Yanam";
s_a[25] = "Amritsar|Barnala|Bathinda|Firozpur|Faridkot|Fatehgarh Sahib|Fazilka|Gurdaspur|Hoshiarpur|Jalandhar|Kapurthala|Ludhiana|Mansa|Moga|Sri Muktsar Sahib|Pathankot|Patiala|Rupnagar|Ajitgarh (Mohali)|Sangrur|Shahid Bhagat Singh Nagar|Tarn Taran";
s_a[26] = "Ajmer|Banswara|Barmer|Barmer Rail Station|Basni|Beawar|Bharatpur|Bhilwara|Bhiwadi|Bikaner|Bongaigaon|Boranada, Jodhpur|Chittaurgarh|Fazilka|Ganganagar|Jaipur|Jaipur-Kanakpura|Jaipur-Sitapura|Jaisalmer|Jodhpur|Jodhpur-Bhagat Ki Kothi|Jodhpur-Thar|Kardhan|Kota|Munabao Rail Station|Nagaur|Rajsamand|Sawaimadhopur|Shahdol|Shimoga|Tonk|Udaipur";
s_a[27] = "Chamurci|Gangtok";
s_a[28] = "Ariyalur|Chennai|Coimbatore|Cuddalore|Dharmapuri|Dindigul|Erode|Kanchipuram|Kanyakumari|Karur|Krishnagiri|Madurai|Mandapam|Nagapattinam|Nilgiris|Namakkal|Perambalur|Pudukkottai|Ramanathapuram|Salem|Sivaganga|Thanjavur|Thiruvallur|Tirupur|Tiruchirapalli|Theni|Tirunelveli|Thanjavur|Thoothukudi|Tiruvallur|Tiruvannamalai|Vellore|Villupuram|Viruthunagar";
s_a[29] = "Adilabad|Hyderabad|Karimnagar|Mahbubnagar|Medak|Nalgonda|Nizamabad|Ranga Reddy|Warangal";
s_a[30] = "Agartala|Dhalaighat|Kailashahar|Kamalpur|Kanchanpur|Kel Sahar Subdivision|Khowai|Khowaighat|Mahurighat|Old Raghna Bazar|Sabroom|Srimantapur";
s_a[31] = "Agra|Allahabad|Auraiya|Banbasa|Bareilly|Berhni|Bhadohi|Dadri|Dharchula|Gandhar|Gauriphanta|Ghaziabad|Gorakhpur|Gunji|Jarwa|Jhulaghat (Pithoragarh)|Kanpur|Katarniyaghat|Khunwa|Loni|Lucknow|Meerut|Moradabad|Muzaffarnagar|Nepalgunj Road|Pakwara (Moradabad)|Pantnagar|Saharanpur|Sonauli|Surajpur|Tikonia|Varanasi";
s_a[32] = "Almora|Badrinath|Bangla|Barkot|Bazpur|Chamoli|Chopra|Dehra Dun|Dwarahat|Garhwal|Haldwani|Hardwar|Haridwar|Jamal|Jwalapur|Kalsi|Kashipur|Mall|Mussoorie|Nahar|Naini|Pantnagar|Pauri|Pithoragarh|Rameshwar|Rishikesh|Rohni|Roorkee|Sama|Saur";
s_a[33] = "Alipurduar|Bankura|Bardhaman|Birbhum|Cooch Behar|Dakshin Dinajpur|Darjeeling|Hooghly|Howrah|Jalpaiguri|Kolkata|Maldah|Murshidabad|Nadia|North 24 Parganas|Paschim Medinipur|Purba Medinipur|Purulia|South 24 Parganas|Uttar Dinajpur";

function populateDistrict(stateElementId, districtElementId) {

    var selectedStateIndex = document.getElementById(stateElementId).selectedIndex;

    var districtElement = document.getElementById(districtElementId);

    districtElement.length = 0; // Fixed by Julian Woods
    districtElement.options[0] = new Option('Select district', '');
    districtElement.selectedIndex = 0;

    var district_arr = s_a[selectedStateIndex].split("|");

    for (var i = 0; i < district_arr.length; i++) {
        districtElement.options[districtElement.length] = new Option(district_arr[i], district_arr[i]);
    }
}

function populateState(stateElementId, districtElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var stateElement = document.getElementById(stateElementId);
    stateElement.length = 0;
    stateElement.options[0] = new Option('Select state', '-1');
    stateElement.selectedIndex = 0;
    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }

    // Assigned all state. Now assign event listener for the district.

    if (districtElementId) {
        stateElement.onchange = function() {
            populateDistrict(stateElementId, districtElementId);
        };
    }
}